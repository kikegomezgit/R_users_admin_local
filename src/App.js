import React, { useEffect, useState } from 'react';
import './assets/App.css';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'reactstrap';
import Header from './components/Header';
import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';
import Searchbar from './components/Searchbar';

function App() {

  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const addUserHandler = user => {
    setUsers([...users, { id: uuidv4(), ...user }])
  }

  const removeUserHandler = id => {
    const newUserList = users.filter(user => user.id !== id)
    setUsers(newUserList)
  }

  const searchUserHandler = text => {
    setSearchValue(text)
  }

  const saveUserHandler = (user) => {
    const index = users.findIndex(x => x.id === user.id);
    users[index] = user
    setUsers(users)
  }

  return (
    <div className="App">
      <Container>
        <Header title='Users Administration' />
        <Searchbar searchUserHandler={searchUserHandler} />
        <ListUsers users={users} removeUserHandler={removeUserHandler} searchValue={searchValue} saveUserHandler={saveUserHandler} />
        <AddUser addUserHandler={addUserHandler} />
      </Container>
    </div>
  );
}

export default App;
