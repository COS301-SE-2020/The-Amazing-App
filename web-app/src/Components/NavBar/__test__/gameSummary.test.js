import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme,{mount ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from '../../DashBoard/SideNavigation/MyGames/GameSummary'
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from '../../Login/SignIn'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(() => [], {}, applyMiddleware());

describe('dashboard MyGame component test',()=>
{
    it('it should render',()=>{
        const component = renderer.create('div.gameSummary');

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('should show required buttons',()=>{
        const button = shallow(<Item />);
        expect(button.find('Button').length).toBe(2);
        //expect(button_.length).toBe(1);
    });

    it('should show required divs', () => {
        const calculator = shallow(<Item />);  
        // expect(links.length).toBe(0);
     //   const length = 0;
       // expect(form.find('input').length).toBe(2);
        expect(calculator.find('div').length).toBe(1);
       
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