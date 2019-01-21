import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8000/" + this.state.value)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
