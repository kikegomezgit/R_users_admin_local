import React from 'react'
import { Button } from 'reactstrap'

const ReadUserRow = (props) => {
    return (
        <tr key={props.user.id}>
            <th scope="row">{props.user.id}</th>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.address}</td>
            <td>{props.user.date_of_birth}</td>
            <td>
                <Button onClick={() => props.editUserIdHandler(props.user.id)}>Edit</Button>
                <Button onClick={() => props.removeUserHandler(props.user.id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default ReadUserRow