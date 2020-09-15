const { Item } = require("semantic-ui-react");
import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "../navBar";
import Footer from "../Footer";
import SignIn from "../../Login/SignIn";

Enzyme.configure({ adapter: new Adapter() });

describe("Navbar  component", () => {
  it("it should render", () => {
    const component = renderer.create(<NavBar />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show required buttons", () => {
    const button = shallow(<NavBar />);
    expect(button.find("Button").length).toBe(4);
    //expect(button_.length).toBe(1);
  });

  it("should show required Links", () => {
    const calculator = mount(<NavBar />);
    // expect(links.length).toBe(0);
    const length = 0;
    // expect(form.find('input').length).toBe(2);
    expect(calculator.find("Nav.Link").length).toBe(length);

    //expect(form.find('button').length).toBe(1);
    // expect(form.find('p.result').length).toBe(1);
  });
  it("Testing the Navbar brand", () => {
    const brand = shallow(<NavBar />);
    expect(brand.find("Navbar.Brand").length).toBe(0);
    //const logo__ = true;
    //  expect(logo__).toBe(true);
  });
});
