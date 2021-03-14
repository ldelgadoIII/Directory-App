const EmployeeTable = ({ children }) => {
    return (
      <>
        <input class="form-control form-control-lg" type="text" placeholder="search"></input>
        <br/>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </>
    )
}

export default EmployeeTable;
