import UserProfileInfo from "./pages/UserProfileInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/dashboard" element={<UserProfileInfo />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
