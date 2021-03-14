import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import EmployeeTable from "./EmployeeTable"

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => this.setState({persons: res.data.results}))
  }

  render() {
    return (
      <div>
        <h1>Employee Database</h1>
        <EmployeeTable persons={this.state.persons}/>
        <ul>
          {this.state.persons.map((person, index) => 
           <li key={index}>
             {`First Name: ${person.name.first}`}
           </li> 
          )}
        </ul>
        {console.log(this.state.persons)}
      </div>
    )
  }
}


export default App;
