import React, { useState, useEffect} from 'react'
import { Form, FormGroup, Input, Button, Label, Container, Alert} from 'reactstrap';

function AddUser(props) {
    const [user, setUser] = useState({ name: "", email: "", address: "", date_of_birth: "" });
    const [userErrors, setUserErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const {addUserHandler} = props

    const add = (e) => {
        e.preventDefault();
        setUserErrors(validateInputs(user))
        setIsSubmit(true)
    }

    const validateInputs = ({name, email, address, date_of_birth}) => {
        const errors = {}
        if (!name) {
            errors.name = "Name is required"
        } else if (name.length > 35 ) {
            errors.name = "Name exceeded 35 letters"
        }else if (name.length < 7 ) {
            errors.name = "Name must be atleast 7 letters"
        }
        if (!email) {
            errors.email = "email is required"
        }
        if (!address) {
            errors.address = "address is required"
        }
        if (!date_of_birth) {
            errors.date_of_birth = "date_of_birth is required"
        }
        return errors
    }

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value.toLowerCase(),
        });
    }

    useEffect(()=> {
        if(Object.keys(userErrors).length === 0 && isSubmit) {
            setIsSubmit(false)
            addUserHandler(user)
            setUser({ name: "", email: "", address: "", date_of_birth: "" })
            setShowAdd(true)
        }
    },[userErrors,isSubmit,showAdd,user, addUserHandler])

    useEffect(()=> {
        if(showAdd) {
            setTimeout(function() {
                setShowAdd(false)
          }, 3000);
        }
    },[showAdd])

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
        <Container>
        {showAdd ? (<div ><Alert>Signed in succesfully</Alert></div>) : <div></div>}
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
                <p className='inputError'>{userErrors.name}</p>
                <Label for="email">Email</Label>
                <Input
                    name="email"
                    placeholder="email@email.com"
                    type="email"
                    value={user.email}
                    onChange={inputsHandler}
                />
                <p className='inputError'>{userErrors.email}</p>
                <Label for="address">Address</Label>
                <Input
                    name="address"
                    placeholder="home address"
                    type="text"
                    value={user.address}
                    onChange={inputsHandler}
                />
                <p className='inputError'>{userErrors.address}</p>
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
                <p className='inputError'>{userErrors.date_of_birth}</p>
            </FormGroup>
            {' '}
            <Button>
                Add
            </Button>
        </Form>
        </Container>

    )
}

export default AddUser