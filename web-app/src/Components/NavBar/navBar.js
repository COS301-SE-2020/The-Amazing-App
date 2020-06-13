import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../logo.png"
import {Link} from 'react-router-dom';
import UserOptions from './UserOptions'


class NavBar extends React.Component
{
    render()
    {
        const myStyle = {
            fontSize: 16,
            color: "white"
        };
       
        return(
                <Navbar sticky="top" style={{backgroundColor: "#2A9D8F"}}>
                    <Navbar.Brand style={{marginLeft: 75, color: "white", fontSize: 16}} >
                        <img src={logo} className="ui small circular image" alt="userImage" style={{height: 55, width: 55}}/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                       { /*<Nav.Link href="home">Home</ Nav.Link>
                        <Nav.Link href="DashBoard">DashBoard</Nav.Link> */}
                    </Nav>
                    <Nav style={{marginRight: 50, color: "white", fontWeight: "normal"}} className="lead" pull Right>
                            <Nav.Link href="/" style={myStyle} >Home</ Nav.Link>
                            <Nav.Link href="DashBoard" style={myStyle}>Dashboards</Nav.Link>
                            <Nav.Link  href="/signup" style={myStyle}>Signup</Nav.Link >
                            <Nav.Link  href="/login" style={myStyle}>Login</Nav.Link >
                            <Nav.Link href="#">
                            <UserOptions />
                            </Nav.Link>
                        </Nav>
                </Navbar>
                
            );
       
    }


    }


export default NavBar;