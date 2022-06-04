import React, { useState } from 'react'
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

function AddUser(props) {
    const [user, setUser] = useState({ name: "", email: "", address: "", date_of_birth: "" });

    const add = (e) => {
        e.preventDefault();
        if (user.name === "") {
            alert("please fill the field")
            return
        }
        if (user.email === "") {
            alert("please fill the field")
            return
        }
        if (user.address === "") {
            alert("please fill the field")
            return
        }
        if (user.date_of_birth === "") {
            alert("please fill the field")
            return
        }
        props.addUserHandler(user)
        setUser({ name: "", email: "", address: "", date_of_birth: "" })
    }

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value.toLowerCase(),
        });
    }

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }

    let max_date = new Date().setFullYear(new Date().getFullYear()-11);
    max_date = formatDate(new Date(max_date))

    let min_date = new Date().setFullYear(new Date().getFullYear()-100);
    min_date = formatDate(new Date(min_date))

    return (
        <Form inline onSubmit={add}>
            <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
                <Input
                    name="name"
                    placeholder="name"
                    type="text"
                    value={user.name}
                    onChange={inputsHandler}
                />
                <Label for="email">Email</Label>
                <Input
                    name="email"
                    placeholder="email@email.com"
                    type="email"
                    value={user.email}
                    onChange={inputsHandler}
                />
                <Label for="address">Address</Label>
                <Input
                    name="address"
                    placeholder="home address"
                    type="text"
                    value={user.address}
                    onChange={inputsHandler}
                />
                <Label for="date_of_birth">Date of birth</Label>
                <Input
                    name="date_of_birth"
                    placeholder=""
                    type="date"
                    value={user.date_of_birth}
                    onChange={inputsHandler}
                    max = {max_date}
                    min= {min_date}
                />
            </FormGroup>
            {' '}
            <Button>
                Add
            </Button>
        </Form>
    )
}

export default AddUser