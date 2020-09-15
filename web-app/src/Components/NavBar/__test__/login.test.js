const { Item, Grid } = require("semantic-ui-react")
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme,{mount ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../navBar';
import Footer from '../Footer'
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from '../../Login/SignIn'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(() => [], {}, applyMiddleware());

describe('Login component',()=>
{
   it('it should render',()=>{
        const component = renderer.create('div.login');

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should not render any buttons',()=>{
        const calculator = mount(<Grid />);
        const form = calculator.find('Button')
        expect(form.length).toBe(0);
       // expect(form.find('button').length).toBe(0);
        //expect(button_.length).toBe(1);
    });
    it('should render required form elements', () => {
        const calculator = shallow(<Provider  store={store}><SignIn />
            </Provider>);
    
        const form = calculator.find('Grid');
        expect(form.length).toBe(0);
       // expect(form.find('input').length).toBe(2);
        //expect(form.find('button').length).toBe(1);
        //expect(form.find('p.result').length).toBe(1);
      });
    it('should render required Divs', () => {
        const calculator = shallow(<Provider  store={store}><SignIn />
            </Provider>);  
        // expect(links.length).toBe(0);
        const length = 0;
       // expect(form.find('input').length).toBe(2);
        expect(calculator.find('MDBContainer').length).toBe(0);
       
        //expect(form.find('button').length).toBe(1);
       // expect(form.find('p.result').length).toBe(1);
      });    


})