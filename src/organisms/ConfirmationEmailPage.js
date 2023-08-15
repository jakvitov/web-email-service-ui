import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import ResendConfirmationEmail from "../atoms/ResendConfirmationEmail";

const ConfirmationEmailPage = () => {

    const {user, isLoading, isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    if (isLoading){
        return <div class="loading">Loading...</div>
    }
    else if (!isAuthenticated){
        navigate("/home")
    }
    return (
        <div id="confirmationEmailPage">
            <h1>Confirmation email sent</h1>
            <p>Confirmation email was sent to {user.email}</p>
            <ResendConfirmationEmail/>
        </div>
    )
}

export default ConfirmationEmailPage