import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "./Components/Navbar/index";
import { Main } from "./Components/Main";
import { Cards } from "./Components/Cards/Cards";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Contacto } from "./Components/AboutMe/Contacto";
import { Tech } from "./Components/Technologies";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("sun");
  useEffect(() => {
    theme === "sun"
      ? document.body.classList.remove("moon")
      : document.body.classList.add("moon");
  }, [theme]);
  return (
    <>
      <Navbar theme={theme}></Navbar>
      <Main theme={theme} setTheme={setTheme}></Main>
      <Cards theme={theme} setTheme={setTheme}></Cards>
      <AboutMe></AboutMe>
      <Contacto></Contacto>
    </>
  );
}

export default App;
