import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import EmployeeTable from "./components/EmployeeTable"
import EmployeeCard from "./components/EmployeeCard"
import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"

// const names = [];

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

  searchEmployee = (search) => {
    this.setState({ search: this.state.persons.filter( person => person.name.first.toLowerCase().includes(search) || person.name.last.toLowerCase().includes(search)) })
  }

  organizeByFirst = () => {
    this.setState({ persons: this.state.persons.sort(this.sortName) })
    // console.log(this.state.persons.sort(this.sortName))
  }

  sortName(a, b) {
    const firstLetter = a.name.first.charAt(0)
    const secondLetter = b.name.first.charAt(0)
    if (firstLetter > secondLetter) return 1;
    if (firstLetter < secondLetter) return -1;
    
  }

  render() {
    return (
      <div className="container">
        <Header />
        <input class="form-control form-control-lg" type="text" placeholder="search" onChange={(e) => this.searchEmployee(e.target.value)}></input> 
        <EmployeeTable byFirst={this.organizeByFirst}>
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
        {/* {console.log(this.state.persons.sort(this.sortName))} */}
        {/* {this.state.persons.map( ({ name }) => console.log(name))}  */}
        {/* {this.state.persons.map( person => names.push(person.name))}
        {console.log("Names Array", names.sort((a, b) => a - b))} */}
      </div>
    )
  }
}


export default App;
