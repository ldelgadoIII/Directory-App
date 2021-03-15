import React, { Component } from 'react';
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable"
import EmployeeCard from "./components/EmployeeCard"
import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"

class App extends Component {
  state = {
    persons: [],
    search: null,
    orderFirstName: true,
    orderLastName: true
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
    this.setState({ orderFirstName: !this.state.orderFirstName })
  }

  reverseByFirst = () => {
    this.setState({ persons: this.state.persons.sort(this.reverseName) })
    this.setState({ orderFirstName: !this.state.orderFirstName })
  }

  sortName(a, b) {
    const firstLetter = a.name.first.charAt(0)
    const secondLetter = b.name.first.charAt(0)
    if (firstLetter > secondLetter) return 1;
    if (firstLetter < secondLetter) return -1;
  }

  reverseName(a, b) {
    const firstLetter = a.name.first.charAt(0)
    const secondLetter = b.name.first.charAt(0)
    if (firstLetter > secondLetter) return -1;
    if (firstLetter < secondLetter) return 1;
  }

  organizeByLast = () => {
    this.setState({ persons: this.state.persons.sort(this.sortLastName) })
    this.setState({ orderLastName: !this.state.orderLastName })
  }

  reverseByLast = () => {
    this.setState({ persons: this.state.persons.sort(this.reverseLastName) })
    this.setState({ orderLastName: !this.state.orderLastName })
  }

  sortLastName(a, b) {
    const firstLetter = a.name.last.charAt(0)
    const secondLetter = b.name.last.charAt(0)
    if (firstLetter > secondLetter) return 1;
    if (firstLetter < secondLetter) return -1;
  }

  reverseLastName(a, b) {
    const firstLetter = a.name.last.charAt(0)
    const secondLetter = b.name.last.charAt(0)
    if (firstLetter > secondLetter) return -1;
    if (firstLetter < secondLetter) return 1;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <input class="form-control form-control-lg" type="text" placeholder="search" onChange={(e) => this.searchEmployee(e.target.value)}></input> 
        <EmployeeTable 
          byFirst={ this.state.orderFirstName ? this.organizeByFirst : this.reverseByFirst } 
          byLast={this.state.orderLastName? this.organizeByLast : this.reverseByLast}>
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
