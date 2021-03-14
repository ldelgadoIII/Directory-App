import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import EmployeeTable from "./components/EmployeeTable"
import EmployeeCard from "./components/EmployeeCard"
import Header from "./components/Header"

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=10")
  
    this.setState({ persons: data.results })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <EmployeeTable>
          {this.state.persons.map((person, index) => {
            return (
              <EmployeeCard 
                id={index} 
                image={person.picture.thumbnail}
                first={person.name.first}
                last={person.name.last}
                phone={person.phone}
                email={person.email}
                dob={person.dob.date}
                />
            )} 
          )}
        </EmployeeTable>      
        {console.log(this.state.persons)}
      </div>
    )
  }
}


export default App;
