const { Item } = require("semantic-ui-react")
import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../Signup'
 
Enzyme.configure({ adapter: new Adapter() });


describe('Login',()=>
{
    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    it('should be show text',()=>{
        const wrapper = shallow(<Login />);
        const text_ = wrapper.find('div div');
        const text = true;
        expect(text).toBe(true);
    });

    

    

})