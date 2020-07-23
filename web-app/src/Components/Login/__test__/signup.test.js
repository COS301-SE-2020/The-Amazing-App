const { Item } = require("semantic-ui-react")
import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../SignUp';
import ReactDom from 'react-dom';
Enzyme.configure({ adapter: new Adapter() });


describe('Register',()=>
{
    it('should show buuton',()=>{
        const wrapper = shallow(<SignUp />);
        const text = true;
        const button = wrapper.find('.loginbtn').debug();
        console.log(button);
        expect(text).toBe(true);

    })
   it('should show text',()=>{
       const wrapper = shallow(<SignUp />);
       const text = wrapper.find('p');
       expect('Forgot Password').toBe('Forgot Password');

   })

   it('should show input box',()=>{
    const wrapper = shallow(<SignUp />);
    const text = true;
    const page = wrapper.find('input');
    expect(text).toBe(true);

    })

    

})

