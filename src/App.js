import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import EmployeeTable from "./components/EmployeeTable"
import EmployeeCard from "./components/EmployeeCard"
import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"

class App extends Component {
  state = {
    persons: [],
    search: null
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=25")
  
    this.setState({ persons: data.results })
  }

  searchEmployee(search) {
    this.setState({ search: this.state.persons.filter( person => person.name.first.includes(search) || person.name.last.includes(search)) })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <input class="form-control form-control-lg" type="text" placeholder="search" onChange={(e) => this.searchEmployee(e.target.value)}></input> 
        <EmployeeTable>
          {this.state.search ? this.state.search.map((person, index) => {
            return (
              <EmployeeCard id={index} image={person.picture.thumbnail} first={person.name.first} last={person.name.last} phone={person.phone} email={person.email} dob={person.dob.date} />
            )} 
          ) : this.state.persons.map((person, index) => {
            return (
              <EmployeeCard id={index} image={person.picture.thumbnail} first={person.name.first} last={person.name.last} phone={person.phone} email={person.email} dob={person.dob.date} />
            )} 
          )}
        </EmployeeTable>      
      </div>
    )
  }
}


export default App;
