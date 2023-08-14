import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
import {UseAlert} from "./AlertContext";
import { useNavigate } from "react-router-dom";
const { v4: uuidv4 } = require('uuid');


const UserBackendInfo = () => {

    const {isAuthenticated, isLoading, getIdTokenClaims} = useAuth0();
    const [userInfoFromBackend, setUserInfoFromBackend] = useState(null);
    const {setAlert} = UseAlert();

    const navigate = useNavigate();

    useEffect( () => {
        async function fetchData(){
            if (!isAuthenticated || isLoading){
                return;
            }
            const tokenRes = await getIdTokenClaims();
            const token = tokenRes.__raw;
            const axiosConfig = {
                headers: {
                    Authorization: "Bearer " + token,
                    TRACE_ID: uuidv4()
                }
            }
            const userInfoResponse = axios.get("/user/info", axiosConfig).then(response => setUserInfoFromBackend(response.data)).catch(err => setAlert(err))
        }
    fetchData()
    }, [isAuthenticated, isLoading])

    const redirectToRegistration = () => {
        navigate("/register")
    }

    if (isLoading || !isAuthenticated){
        return null;
    }
    else  if (userInfoFromBackend == null){
        return null;
    }
    else if (userInfoFromBackend.responseState != "OK") {
        if (userInfoFromBackend.responseState === "USER_NOT_FOUND"){
            redirectToRegistration();
            return null;
        }
        return <p>{userInfoFromBackend.responseState}</p>
    }
    else {
        return (
        <div id="userInfoFromBackendDiv">
            <p>City: {userInfoFromBackend.city}</p>
            <p>Country: {userInfoFromBackend.countryISO}</p>
            <p>Longitude: {userInfoFromBackend.longitude}</p>
            <p>Latitude: {userInfoFromBackend.latitude}</p>
        </div>
        )
    }
}

export default UserBackendInfo