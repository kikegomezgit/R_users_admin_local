import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

const EditUserRow = (props) => {

    const [user, setUser] = useState({ id: props.user.id, name: props.user.name, email: props.user.email, address: props.user.address, date_of_birth: props.user.date_of_birth });

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value.toLowerCase(),
        });
    }

    return (
        <tr key={user.id}>
            {/* <th scope="row">{user.id}</th> */}
            <td><Input
                name="name"
                placeholder="name"
                type="text"
                value={user.name}
                onChange={inputsHandler}
            /></td>
            <td><Input
                name="email"
                placeholder="email@email.com"
                type="email"
                value={user.email}
                onChange={inputsHandler}
            /></td>
            <td><Input
                name="address"
                placeholder="home address"
                type="text"
                value={user.address}
                onChange={inputsHandler}
            /></td>
            <td><Input
                name="date_of_birth"
                placeholder=""
                type="date"
                value={user.date_of_birth}
                onChange={inputsHandler}
            />  </td>
            <td>
                <span className='buttons' onClick={() => props.saveUserHandler(user)}>save</span> 
                <span className='buttons' onClick={() => props.closeUserHandler(null)}>close</span> 
            </td>
        </tr>
    )
}

export default EditUserRow
