import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";

const Home = () => {
    return (
        <div id="homePage">
            <h1>Weather email service</h1>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )
}

export default Home