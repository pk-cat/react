import React from "react";
// expect
import { expect } from "chai";
// component
import Hero from "../src/component/hero/hero";
import APP from "../src/component/App";
// shallow
import enzyme from "./enzyme-setup";
const { shallow, mount } = enzyme;
// shallow-test
describe("test for shallow", function() {
  const wrapper = shallow(<Hero />);

  // it("find", function() {
  //   expect(wrapper.find("p")).to.have.lengthOf(1);
  //   expect(wrapper.find("p").text()).to.equal("this is a test");
  //   expect(wrapper.find("span"));
  //   console.log("span个数"+wrapper.find("span").length)
  // });
  // it("textApp", function() {
  //   expect(
  //     wrapper
  //       .find(".test")
  //       .childAt(0)
  //       .text()
  //   ).to.equal("this is a test");
  // });
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
