//-----api.test.js ----test with mocha,chai and supertest
const request = require("supertest");
const app = require("../src/app");
const expect = require("chai").expect;
// it("respond with json  ", (done) => {
//   request(app)
//     .get("/pruebat")
//     .set("Accept", "application/json")
//     .expect("Content-Type", /json/)
//     .expect(200, done);
// });

describe("get query, return okey with a text", () => {
  it("correct query, and inverter ", function (done) {
    request(app)
      .get("/texto?text=kenneth")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({
        text: "htennek",
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("correct query , even with mayus letters", function (done) {
    request(app)
      .get("/texto?text=Olo")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("correct query, palindromo has to return with  true response", function (done) {
    request(app)
      .get("/texto?text=olo")

      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({
        text: "olo",
        palindrome: true,
      })

      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("Bad query, you have to send a correct text with letters and not other characters", function (done) {
    request(app)
      .get("/texto?text=olo*")

      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({ error: "no text" })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
