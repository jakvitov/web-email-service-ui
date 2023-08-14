import UserProfileInfo from "./organisms/UserProfileInfo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./organisms/Home";
import RegisterUser from "./organisms/RegisterUser";
import {ErrorProvider, ErrorBoundary} from "./atoms/ErrorContext";

function App() {

  return (
      <ErrorProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/dashboard" element={<UserProfileInfo/>}/>
                  <Route path="/register" element={<RegisterUser/>}/>
              </Routes>
          </BrowserRouter>
      </ErrorProvider>
  );
}

export default App;
