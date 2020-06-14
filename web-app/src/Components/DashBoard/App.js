import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavComponent from './SideNavComponent'
import Footer from '../NavBar/Footer'

class App extends React.Component{
    render(){
        return(
            <div>
                <SideNavComponent/>
                <Footer />
            </div>
        );
    }
}

export default App;