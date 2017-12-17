import React from 'react';
import { Jumbotron, Button,InputGroup, InputGroupAddon, Input ,InputGroupButton, Badge } from 'reactstrap';

class Home extends React.Component{
    render()
    {
        return(
            <div>
            <Jumbotron>
            <h2>Tusken - Yo Yo</h2>
                <InputGroup>                
                <Input />
                <InputGroupButton><Button color="primary" active>Search</Button></InputGroupButton>
                </InputGroup> 
            </Jumbotron>
            </div>
        );
    }
}

export default Home;