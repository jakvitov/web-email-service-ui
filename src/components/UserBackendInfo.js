import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
const { v4: uuidv4 } = require('uuid');

const UserBackendInfo = () => {

    const {user, isAuthenticated, isLoading, getIdTokenClaims} = useAuth0();
    const [userInfoFromBackend, setUserInfoFromBackend] = useState(null);

    useEffect( () => {
        async function fetchData(){
            const tokenRes = await getIdTokenClaims();
            const token = tokenRes.__raw;
            const axiosConfig = {
                headers: {
                    Authorization: "Bearer " + token,
                    TRACE_ID: uuidv4()
                }
            }
            const userInfoResponse = axios.get("/user/info", axiosConfig).then(response => setUserInfoFromBackend(response.data)).catch(err => console.log(err))
        }
    fetchData()
    }, [isAuthenticated, isLoading])

    if (isLoading || !isAuthenticated){
        return null;
    }
    else  if (userInfoFromBackend == null){
        return null;
    }
    else if (userInfoFromBackend.responseState != "OK")
        return <p>{userInfoFromBackend.responseState}</p>
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