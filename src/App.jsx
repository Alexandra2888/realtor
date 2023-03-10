import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./forms/SignIn.jsx";
import SignUp from "./forms/SignUp.jsx";
import ForgotPassword from "./forms/ForgotPassword.jsx";
import Header from "./UI/Header.jsx";
import Offers from "./pages/Offers";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
