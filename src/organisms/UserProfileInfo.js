import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "../atoms/LoginButton";
import UserBackendInfo from "../atoms/UserBackendInfo";
import Hud from "../molecules/Hud";
import {useError} from "../atoms/ErrorContext";


const UserProfileInfo = () => {

    const {user, isAuthenticated, isLoading, getIdTokenClaims} = useAuth0();
    const {setError} = useError();

    const token = getIdTokenClaims().then((id) => id.__raw).catch(err => setError(err))

    if (isLoading){
        return <div id="loadingDiv">Loading...</div>;
    }
    else if (!isAuthenticated){
        return <div id="notAuthenticatedDiv"><LoginButton/></div>
    }
    else {
        return (
            <div id="userProfileInfo">
                <Hud/>
                <p>Email: {user.email}</p>
                <UserBackendInfo/>
            </div>
        )
    }
}

export default UserProfileInfo