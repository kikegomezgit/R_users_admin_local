import React, { useState, Fragment } from 'react'
import { Table, Form } from 'reactstrap'
import ReadUserRow from './ReadUserRow'
import EditUserRow from './EditUserRow'

function User(props) {
    let usersModify = props.users
    const message = props.searchValue.length > 1 ? 'Search did not found anything' : 'There is no data on the table'
    const [editUserId, setEditUserId] = useState(null)

    const editUserIdHandler = id => {
        setEditUserId(id)
      }
    const closeUserHandler = state => {
        setEditUserId(state)
    }
    const saveUserHandler = user => {
        setEditUserId(null)
        props.saveUserHandler(user)
    }


    if (props.searchValue) {
        usersModify = usersModify.filter(
            obj => Object.values(obj).some(
                val => typeof val === "string" && val.includes(props.searchValue.toLowerCase())
            )
        );
    }

    let users = usersModify.map(user => 
            <Fragment key={user.id}>
                {editUserId === user.id ? <EditUserRow user={user} closeUserHandler={closeUserHandler} saveUserHandler={saveUserHandler}/> : <ReadUserRow user={user} removeUserHandler={props.removeUserHandler} editUserIdHandler={editUserIdHandler} />}
            </Fragment>
    )

    return (
        <Form>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Day of birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{users.length >= 1 ? users : message}</tbody>
            </Table>
        </Form>
    )
}

export default User