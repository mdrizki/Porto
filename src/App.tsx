import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import SwitcherDarkMode from "./components/SwitcherDarkMode";
import ProjectPage from "./pages/ProjectPage";

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
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/project" Component={ProjectPage} />
      </Routes>
      <SwitcherDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
