import LoginButton from "../atoms/LoginButton";
import LogoutButton from "../atoms/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

const Hud = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading || !isAuthenticated){
        return (
            <nav id="hud">
                <LoginButton/>
            </nav>
        )
    }

    return (
        <nav id="hud">
            <p>{user.email}</p>
            <LogoutButton/>
        </nav>
    )
}

export default Hud