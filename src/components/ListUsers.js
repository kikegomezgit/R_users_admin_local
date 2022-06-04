import React from 'react'
import { Container, Button } from 'reactstrap';
import User from './User';
function ListUsers(props) {
  const removeUserHandler = (id) => props.removeUserHandler(id)

  return (
    <Container>
      <div className='m-3'>
        <User users={props.users}  removeUserHandler={removeUserHandler} searchValue={props.searchValue} saveUserHandler={props.saveUserHandler}/>
      </div>
    </Container>
  )
}

export default ListUsers