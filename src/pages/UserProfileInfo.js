import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import {useState} from "react";
import UserBackendInfo from "../components/UserBackendInfo";


const UserProfileInfo = () => {

    const {user, isAuthenticated, isLoading, getIdTokenClaims} = useAuth0();
    const [error, setError] = useState();

    const token = getIdTokenClaims().then((id) => id.__raw).catch((err) => console.log(err))

    if (isLoading){
        return <div id="loadingDiv">Loading...</div>;
    }
    else if (!isAuthenticated){
        return <div id="notAuthenticatedDiv">You need to login first.<LoginButton/></div>
    }
    else {
        return (
            <div id="userProfileInfo">
                <p>Email: {user.email}</p>
                <UserBackendInfo/>
            </div>
        )
    }
}

export default UserProfileInfo