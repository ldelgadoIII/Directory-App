const EmployeeCard = ({ id, image, first, last, phone, email, dob }) => {
    return (
        <tr key={id}>
            <th scope="row"><img src={image} alt="thumbnail"/></th>
            <td>{first}</td>
            <td>{last}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr> 
    )
}

export default EmployeeCard
