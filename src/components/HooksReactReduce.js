import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./theme-context-hooks";

export default function HooksReactReduce(props) {
  const name = useFormInput("Dailenis");
  console.log("***name: ", name);
  const surname = useFormInput("Gonzalez");
  console.log("***surname: ", surname);
  const theme = useContext(ThemeContext);
  const width = useWindowsWidth();
  useDocumentTittle(`${name.value} ${surname.value}`);

  return (
    <div style={theme}>
      <h1> React Código con CUSTOM HOOKS </h1>
      Nombre: <input {...name} />
      Apellido: <input {...surname} />
      Tamaño de la ventana:
      <h3> {width}</h3>
    </div>
  );
}

//Custom Hook - Siempre debe empezar con la palabra use
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue); //Le pasamos el estado inicial
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}
function useDocumentTittle(tittle) {
  useEffect(() => {
    document.title = tittle;
  });
}
function useWindowsWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleRezise = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleRezise); //subscribe
    //To clean up affter effect return a function  es como un componnet will unmount
    return () => {
      window.removeEventListener("resize", handleRezise); //UNsubscribe
    };
  });
  return width;
}

//const name = "???";
//const setName = "???";
