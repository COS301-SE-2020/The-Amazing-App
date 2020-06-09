import React from 'react';
import HomePage  from './HomePage';
import SignIn from './Login/SignIn';
import SignUp from './Login/SignUp';
import NavBar from './NavBar/navBar'
import {BrowserRouter, Route} from 'react-router-dom';
import DashBoard from './DashBoard/DashBoard';



class App extends React.Component
{
    render()
    {
        return(
            <div>
               
                <BrowserRouter>
                    <NavBar />
                    <Route path ='/home' exact>
                        <HomePage />
                    </Route>
                    <Route path ='/DashBoard' exact>
                        <DashBoard />
                    </Route>
                    <Route path ='/LogIn' exact>
                        <SignIn />
                    </Route>
                    <Route path ='/SignUp' exact>
                        <SignUp />
                    </Route>
                </BrowserRouter>
               
            </div>
        );
    }
}


export default App;






