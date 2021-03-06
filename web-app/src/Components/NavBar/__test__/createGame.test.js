const { Item } = require("semantic-ui-react")
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme,{mount ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../navBar';
import MDBFooter from '../Footer'
window.URL.createObjectURL = function() {};
import Modal from '../../DashBoard/SideNavigation/CreateGame/CreateGameModal'
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from '../../Login/SignIn'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn()
    })),
    NavigationControl: jest.fn()
  }));
  
Enzyme.configure({ adapter: new Adapter() });
const store = createStore(() => [], {}, applyMiddleware());

describe('CreateGame component test',()=>
{
   /* it('it should render',()=>{
        const component = renderer.create('div.create');

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });*/


    it('should render map',()=>{
        const button = shallow(<Provider store={store}> <Modal /> </Provider>);
        expect(button.find('MapModal').length).toBe(0);
        //expect(button_.length).toBe(1);
    });

    it('should show correct number of buttons', () => {
        const calculator = shallow(<Provider store={store}> <Modal /> </Provider>);  
        // expect(links.length).toBe(0);
     //   const length = 0;
       // expect(form.find('input').length).toBe(2);
        expect(calculator.find('Button').length).toBe(0);
       
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