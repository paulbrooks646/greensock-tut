import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Linear, TweenMax } from "gsap";

function App() {
  let logoElement = useRef(null);

  useEffect(() => {
    TweenMax.from(logoElement, 3, {
      x: 600,
      y: 600
    })
    TweenMax.to(logoElement, 6, {
      repeat: -1,
      rotate: 360,
      ease: Linear.easeNone,
    });
  }, []);

  function scaleUp() {
    TweenMax.to(logoElement, 1, {
      scale: 4,
      ease: Linear.ease,
    });
  }
  function scaleDown() {
    TweenMax.to(logoElement, 1, {
      scale: 0.2,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          ref={(element) => {
            logoElement = element;
          }}
          onMouseEnter={() => scaleUp()}
          onMouseLeave={scaleDown}
        />
      </header>
    </div>
  );
}

export default App;
