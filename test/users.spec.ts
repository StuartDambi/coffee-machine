const expect = require("chai").expect;
import request from "supertest";

import app from "../app";

describe("Users", async () => {
  it("should return list of users", async () => {
    const { status, body } = await request(app).get("/api/v1/users");
    const { data } = body;
    expect(status).to.equal(200);
    expect(data).to.be.an("array");
  });
  it("should login a user and return token", async () => {
    const { status, body } = await request(app)
      .post("/api/v1/users/auth/login")
      .send({
        email: "stuart@wild.coffee",
        password: "simplepass",
      });
    const { data } = body;
    expect(status).to.equal(200);
    expect(data).to.be.a("string");
  });
  it("should fail if email is wrong", async () => {
    const { status, body } = await request(app)
      .post("/api/v1/users/auth/login")
      .send({
        email: "stuart@wild.coffeeee",
        password: "simplepass",
      });
    const { message } = body;
    expect(status).to.equal(403);
    expect(message).to.equal(
      "email stuart@wild.coffeeee does not exist, try signing up"
    );
  });
  it("should fail if password is wrong", async () => {
    const { status, body } = await request(app)
      .post("/api/v1/users/auth/login")
      .send({
        email: "stuart@wild.coffee",
        password: "simplepassword",
      });
    const { message } = body;
    expect(status).to.equal(403);
    expect(message).to.equal("Wrong email or password, please try again");
  });
});
