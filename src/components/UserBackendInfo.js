import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";

const UserBackendInfo = () => {

    const {user, isAuthenticated, isLoading, getIdTokenClaims} = useAuth0();
    const [userInfoFromBackend, setUserInfoFromBackend] = useState(null);

    useEffect(async () => {
        const tokenRes = await getIdTokenClaims();
        const token = tokenRes.__raw;
        console.log(token)
        const axiosConfig = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        const userInfoResponse = axios.get("/user/info", axiosConfig).then(response => setUserInfoFromBackend(response.data)).catch(err => console.log(err))
    }, [isAuthenticated, isLoading])

    if (isLoading || !isAuthenticated){
        console.log("1")
        return null;
    }
    else  if (userInfoFromBackend == null){
        console.log("2")
        return null;
    }
    else {
        return (
        <div id="userInfoFromBackendDiv">
            <p>City: {userInfoFromBackend.city}</p>
            <p>Country: {userInfoFromBackend.countryISO}</p>
        </div>
        )
    }
}

export default UserBackendInfo