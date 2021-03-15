const EmployeeTable = ({ children, byFirst, byLast }) => {
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">First Name<i class="bi bi-caret-down-fill" onClick={byFirst}></i></th>
              <th scope="col">Last Name<i class="bi bi-caret-down-fill" onClick={byLast}></i></th>
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
