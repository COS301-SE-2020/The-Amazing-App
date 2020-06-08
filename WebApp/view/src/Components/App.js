import React from 'react';
import HomePage  from './HomePage';
import SignUp from './Login/SignUp'
import NavBar from './NavBar/navBar'
import DashBoard from './DashBoard/DashBoard'
import {Route,Switch, Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
    render()
    {
        return(
            <div>
               <NavBar />
               <Router>
                   <Route path='/home'>
                       <HomePage />
                   </Route>
               </Router>
            </div>
        );
    }
}


export default App;






