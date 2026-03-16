import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SocialBar from "./components/SocialBar";
import About from "./pages/About";
import Events from "./pages/Events";
import Tourism from "./pages/Tourism";
import Investment from "./pages/Investment";
import SplashScreen from "./components/SplashScreen"; // import splash

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <SocialBar />
          <Navbar />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/investment" element={<Investment />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;