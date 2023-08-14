import UserProfileInfo from "./organisms/UserProfileInfo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./organisms/Home";
import RegisterUser from "./organisms/RegisterUser";
import {AlertProvider} from "./atoms/AlertContext";
import ConfirmationEmailPage from "./organisms/ConfirmationEmailPage";

function App() {

  return (
      <AlertProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/dashboard" element={<UserProfileInfo/>}/>
                  <Route path="/register" element={<RegisterUser/>}/>
                  <Route path="/confirmation" element={<ConfirmationEmailPage/>}/>
              </Routes>
          </BrowserRouter>
      </AlertProvider>
  );
}

export default App;
