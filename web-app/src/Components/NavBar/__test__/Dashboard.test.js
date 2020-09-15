const { Item } = require("semantic-ui-react")
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme,{mount ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../../DashBoard/SideNavigation/MyGames/MyGamesModal'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(() => [], {}, applyMiddleware());

describe('dashboard MyGame component test',()=>
{
    it('it should render',()=>{
        const component = renderer.create(<Modal />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('should render my games',()=>{
        const button = shallow(<Modal />);
        expect(button.find('MyGames').length).toBe(1);
        //expect(button_.length).toBe(1);
    });

    it('should not render any Divs', () => {
        const calculator = shallow(<Modal />);  
        // expect(links.length).toBe(0);
     //   const length = 0;
       // expect(form.find('input').length).toBe(2);
        expect(calculator.find('div').length).toBe(0);
       
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