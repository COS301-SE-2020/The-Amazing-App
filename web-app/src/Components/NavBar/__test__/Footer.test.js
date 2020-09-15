const { Item } = require("semantic-ui-react")
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme,{mount ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../navBar';
import MDBFooter from '../Footer'
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from '../../Login/SignIn'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(() => [], {}, applyMiddleware());

describe('Footer component test',()=>
{

    it('should not render any buttons',()=>{
        const button = shallow(<Provider  store={store}><MDBFooter />
            </Provider>);
        expect(button.find('Button').length).toBe(0);
        //expect(button_.length).toBe(1);
    });

    it('should render required Divs', () => {
        const calculator = shallow(<MDBFooter />);  
        // expect(links.length).toBe(0);
     //   const length = 0;
       // expect(form.find('input').length).toBe(2);
        expect(calculator.find('div.footer-copyright').length).toBe(1);
       
        //expect(form.find('button').length).toBe(1);
       // expect(form.find('p.result').length).toBe(1);
      });    
    /*  it('should render required Divs', () => {
        const calculator = shallow(<MDBFooter />);  
        // expect(links.length).toBe(0);
     //   const length = 0;
       // expect(form.find('input').length).toBe(2);
       const internal = calculator.find('div.footer-copyright')
        expect(internal.find('MDBContainer').length).toBe(1);
       
        //expect(form.find('button').length).toBe(1);
       // expect(form.find('p.result').length).toBe(1);
      });    */


})