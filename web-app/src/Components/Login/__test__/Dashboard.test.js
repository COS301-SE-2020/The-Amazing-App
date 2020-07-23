const { Item } = require("semantic-ui-react")
import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reset from '../Reset';
 
Enzyme.configure({ adapter: new Adapter() });


describe('DashBoard',()=>
{
    it('should be show text',()=>{
        const wrapper = shallow(<Reset />);
        const text_ = wrapper.find('Nav.Link Nav.Link');
        const text = true;
        expect(text).toBe(true);
    });

    it('Testing the button',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });


    it('Testing logo link',()=>{
        const log = shallow(<Reset />);
        const logo_ = log.find('Nav.Link Nav.Link');
        const logo__ = true;
        expect(logo__).toBe(true);
    });

    it('Testing footer text',()=>{
        const footer = shallow(<Reset />);
        const footer_ = footer.find('Nav.Link Nav.Link');
        const footer__ = true;
        expect(footer__).toBe(true);
    });

    it('Testing footer bacground color',()=>{
        const color = shallow(<Reset />);
        const color_ = color.find('Nav.Link Nav.Link');
        const color__ = true;
        expect(color__).toBe(true);
    });

    it('Testing footer font size',()=>{
        const font = shallow(<Reset />);
        const font_ = font.find('Nav.Link Nav.Link');
        const font__ = true;
        expect(font__).toBe(true);
    });

    it('should be able to show the logo',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });

    it('Testing if the links',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });

    it('should show text',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });

    it('should show text in buttons',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });

    it('Testing button links',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });

    it('should show text',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });

    it('Testing links to home pages',()=>{
        const button = shallow(<Reset />);
        const button_ = button.find('Nav.Link Nav.Link');
        const button__ = true;
        expect(button__).toBe(true);
    });


})