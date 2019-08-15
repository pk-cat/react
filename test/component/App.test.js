// import React
import React from "react";
// expect
import { expect } from "chai";
// component
import App from "../../src/component/App.js";
// enzyme
import enzyme from "../enzyme-setup";
// import shallow/mount from enzyme
const { shallow, mount } = enzyme;

// test of state
describe("state test", function() {
  const wrapper = shallow(<App />);
  // 1.the state to be a object and has all keys('heroArr')
  it("1.the state to be a object and has all keys('heroArr').", function() {
    expect(wrapper.state())
      .to.be.a("object")
      .that.has.all.keys("heroArr");
  });
  // 2.the state heroArr is an array and has 9 elements
  it("2.the state heroArr is an array and has 9 elements.", function() {
    expect(wrapper.state("heroArr"))
      .to.be.an("array")
      .that.has.lengthOf(9);
  });

  // 3.every element of  heroArr have 5 keys
  it("3.every element of  heroArr have 5 keys.", function() {
    // Loop through the array
    wrapper.state("heroArr").map(e => {
      // test every element
      expect(e).to.have.all.keys(
        "chineseName",
        "englishName",
        "heroId",
        "time",
        "collect"
      );
    });
  });
});

// test of render--App component
describe("render test", function() {
  const wrapperApp = shallow(<App />);
  // <Router>...</Router>
  const parents = wrapperApp.render();
  // 1.name of the render is BrowserRouter.
  it("1.name of the render is BrowserRouter.", function() {
    expect(wrapperApp.name()).to.be.equal("BrowserRouter");
  });

  // 2.App component has 3 sub-elements.
  it("2.App component has 3 sub-elements.", function() {
    expect(parents).to.have.lengthOf(3);
  });

  // 3.The header has 1 sub-element -nav
  it("3.The header has 1 sub-element --nav", function() {
    expect(parents.first().children()).to.have.lengthOf(1);
    expect(parents.first().find('nav')).to.have.lengthOf(1);
  });

  // 4.'nav' has 11 sub-elements.
  it("4.'nav' has 11 sub-elements-a", function() {
  expect(
    parents
      .first()
      .children()
      .children()
    ).to.have.lengthOf(11);
    expect(
      parents
        .first()
        .children()
        .find("a")
    ).to.have.lengthOf(11);
  });

  // 5. button test---just one button
  it("5. button test", function() {
    expect(wrapperApp.state("num")).to.equal(0);
    console.log(wrapperApp.state("num"));
    wrapperApp.find(".colBtns").simulate("click");
    expect(wrapperApp.state("num")).to.equal(1);
    console.log(wrapperApp.state("num"));
  });
  // 6. button test ----more than one button
  it("6. button test", function() {
    expect(wrapperApp.state('heroArr'))

  });
});

//

// jsdom-test
// describe("test for jsdom", function() {
//   const wrapper = mount(<APP />);
//   it("find", function() {
//     expect(wrapper.find(".test").childAt(0)).to.have.lengthOf(1);
//   });
//   it("text", function() {
//     expect(
//       wrapper
//         .find(".test")
//         .childAt(0)
//         .text()
//     ).to.equal("this is a test");
//   });
// });
