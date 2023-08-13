import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfileInfo from "./pages/UserProfileInfo";

function App() {
  return (
      <div>
        <h1>Weather email service</h1>
            <LoginButton/>
            <LogoutButton/>
            <UserProfileInfo/>
      </div>
  );
}

export default App;
