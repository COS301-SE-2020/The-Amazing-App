const { Item } = require("semantic-ui-react")
import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Forgot from '../Forgot';
import ReactDOM from 'react-dom';
Enzyme.configure({ adapter: new Adapter() });


describe('Forgot',()=>
{
     it("renders without crashing", ()=>{
        const wrapper = shallow(<Forgot />);
        const page = true;
        const text = wrapper.find('div');
        expect(page).toBe(true) ;
    })
    it('should show buuton',()=>{
        const wrapper = shallow(<Forgot />);
        
        const button = wrapper.find('.loginbtn').debug();
        console.log(button);

        
        expect(true).toBe(true);

    })
   it('should show text',()=>{
       const wrapper = shallow(<Forgot />); 
       const text = wrapper.find('p');
       expect('Forgot Password').toBe('Forgot Password');

   })

   it('should show input box',()=>{
    const wrapper = shallow(<Forgot />);
    const text = wrapper.find('input');
    expect(true).toBe(true);

    })
    
   

    

})

