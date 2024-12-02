import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import SwitcherDarkMode from "./components/SwitcherDarkMode";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <NavbarComponent darkMode={darkMode} />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/project" Component={ProjectPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
      <SwitcherDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FooterComponent />
    </>
  );
}

export default App;
