import React, { useEffect, useState } from "react";


function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // call parent to hide splash
    }, 3000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src="/kente.jpg" alt="Kente Splash" />
      <h1>Welcome to December in Ghana</h1>
    </div>
  );
}

export default SplashScreen;