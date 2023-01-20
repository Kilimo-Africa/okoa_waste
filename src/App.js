import "./App.css";
import Landing from "./pages/landing/landing";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth">
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<Reset />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
