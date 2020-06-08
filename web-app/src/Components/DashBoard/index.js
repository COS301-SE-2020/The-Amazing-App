import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavComponent from './SideNavComponent'

class App extends React.Component{
    render(){
        return <SideNavComponent/>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));