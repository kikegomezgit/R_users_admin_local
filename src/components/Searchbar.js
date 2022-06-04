import React, {useState} from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap';

function Searchbar(props) {
    const [searchValue, setSearchValue] = useState("");

    const search = (e) => {
        e.preventDefault();
        props.searchUserHandler(searchValue)
    }
  return (
    <Form inline onSubmit={search}>
            <FormGroup>
                <Input
                    name="search"
                    placeholder="type something.."
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </FormGroup>
            {' '}
            <Button>
                Search
            </Button>
        </Form>
  )
}

export default Searchbar