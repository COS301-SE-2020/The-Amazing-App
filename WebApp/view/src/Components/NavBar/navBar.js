import React from 'react';
import { Nav, Navbar} from "react-bootstrap";


class NavBar extends React.Component
{
    render()
    {
       
        return(
                <Navbar bg="light" variant="light">
                    <Navbar.Brand >The Amazing App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="DashBoard">DashBoard</Nav.Link>
                    </Nav>
                    <Nav pull Right>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                </Navbar>
                
            );
       
    }


    }


export default NavBar;