const EmployeeTable = ({ persons }) => {
    return (
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
          <tr>
            <th scope="row">1</th>
            <td>{persons[0].name.first}</td>
            <td>{persons[0].name.last}</td>
            <td>{persons[0].phone}</td>
            <td>{persons[0].email}</td>
            <td>01-01-2021</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>(555) 555-555</td>
            <td>@mdo</td>
            <td>01-01-2021</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>(555) 555-555</td>
            <td>@mdo</td>
            <td>01-01-2021</td>
          </tr>
        </tbody>
      </table>
    )
}

export default EmployeeTable;
