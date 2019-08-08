import React from "react";
// expect
import { expect } from "chai";
// component
// import News from "../../src/component//news/new.js";
import App from "../../src/component/App.js";
// enzyme
import enzyme from "../enzyme-setup";
const { shallow, mount } = enzyme;

// describe("News test", function() {
//   const wrapper = shallow(<News />);
//   it("state", function() {
//     expect(
//       wrapper
//         .find(".a")
//         .text()
//     ).to.be.equal("123");
//   });
// });
describe("App test", function() {
  const wrapper = mount(<App />);
  it("state", function() {
    expect(
      wrapper
        .find(".a")
        .text()
    ).to.be.equal("123");
  });
});
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
