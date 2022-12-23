import "./App.css";
import Landing from "./pages/landing/landing";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/signup";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Landing /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
