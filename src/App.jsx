import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import Education from "./components/Education";
import { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=0fYi8SGA20k

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === false
  );

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") !== "false";
    setIsDarkMode(savedDarkMode);
    document.documentElement.classList.toggle("dark", savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 dark:bg-primary bg-light_primary">
        <div className="dark:bg-hero-pattern bg-hero-bg-light bg-cover bg-no-repeat bg-center">
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Hero isDarkMode={isDarkMode} />
        </div>
        <About />
        <Education isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Tech isDarkMode={isDarkMode} />
        <Projects />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas isDarkMode={isDarkMode} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
