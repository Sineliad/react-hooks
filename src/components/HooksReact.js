import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./theme-context-hooks";

export default function HooksReact(props) {
  const [name, setName] = useState("Dailenis"); //Le pasamos el estado inicial
  const [surname, setSurname] = useState("Gonzalez");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${name} ${surname}`;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
      const handleRezise = () => setWidth(window.innerWidth);
      //subscribe
      window.addEventListener("resize", handleRezise);
      //To clean up affter effect return a function  es como un componnet will unmount
      return () => {//UNsubscribe
          window.removeEventListener("resize", handleRezise);
      }
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <div style={theme}>
      <h1> React Código con Hooks </h1>
      Nombre: <input value={name} onChange={handleNameChange} />
      Apellido: <input value={surname} onChange={handleSurnameChange} />
      Tamaño de la ventana:
      <h3> {width}</h3>
    </div>
  );
}

//const name = "???";
//const setName = "???";
