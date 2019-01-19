## React Hooks useState, useContext, useEffect  and custom Hooks

Tres ejemplos iguales uno con react normal, otro con react hooks useState, useContext, useEffect y otro con custom  hooks

## Instalación de eslint-plugin-react-hooks para poder utilizar hooks en la app
## `npm install eslint-plugin-react-hooks@next`
## `yarn add react@next`
## `yarn add react-dom@next`

## Los Hooks resuleven estas desventajas de React
1. No se puede reutilizar la lógica -  Reuse Logic
2. Compoentes Grandes - Giant Components (Wrapper Hell)
3. Clases confusas - Confiusing clases

## Context in react
El contexto proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

**Note: No se puede llamar un hook dentro de una condicón debe ser en el top level de componente**

**Note: Los Custom Hook - Siempre debe empezar con la palabra use**
