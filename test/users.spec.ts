const expect = require("chai").expect;
const server = require("../app");

describe("Sample test", () => {
  it("should show this test", () => {
    expect("Stuart tests").to.equal("Stuart tests");
  });
});
