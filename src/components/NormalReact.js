import React from "react";
import { ThemeContext } from "./theme-context-normal";

class NormalReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dailenis",
      surname: "Gonzalez",
      width: window.innerWidth
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleRezise = this.handleRezise.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSurnameChange(e) {
    this.setState({ surname: e.target.value });
  }

  //browser api para actualizar el título de la ventana
  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
    window.addEventListener("resize", this.handleRezise);
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleRezise);
  }

  handleRezise() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div style={theme}>
            <h1> React Código Normal</h1>
            Nombre:{" "}
            <input value={this.state.name} onChange={this.handleNameChange} />
            Apellido:{" "}
            <input
              value={this.state.surname}
              onChange={this.handleSurnameChange}
            />
            Tamaño de la ventana:
            <h3>{this.state.width} </h3>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

NormalReact.contextType = ThemeContext;
export default NormalReact;
