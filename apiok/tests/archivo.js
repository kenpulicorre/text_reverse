const request = require("supertest");
const app = require("../src/app").app;
// const expect = require("chai").expect;
// const assert = require("chai").assert;
// const chai = require("chai");

console.log("oke");

// describe("subiendo algo", () => {
//   it("debe retornar algo");
// });

// // describe("subiendo image", () => {
// //   // beforeEach((done) => {
// //   //   request(app).end(() => {
// //   //     return done();
// //   //   });
// //   // });
// //   it("respond with json  ", (done) => {
// //     request(app)
// //       .get("/pruebat")
// //       .set("Accept", "application/json")
// //       .expect("Content-Type", /json/)
// //       .expect(200, done);
// //   });

// //   // it("dmirando nuevamente", function (done) {
// //   //   request(app)
// //   //     .get("/texto?text=olo")
// //   //     // .set("Accept", "application/json")
// //   //     .set("content-type", "application/json")
// //   //     // .send()
// //   //     .end((err, res) => {
// //   //       return done();
// //   //     });
// //   // });
// // });

//----------------------
it("respond with json  ", (done) => {
  request(app)
    .get("/pruebat")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

// describe("nuevo describe,", function (params) {
//   it("assertion success", async function (done) {
//     request(app)
//       .get("/texto?text=olo")
//       .then((res, body) => {
//         expect(res.status).equal(200);
//         done();
//       })
//       .catch(done);
//     // .set("Accept", "application/json")
//     // .set("content-type", "application/json")
//     // .send()
//     // .expect(200)
//     // .end(function (error, response, body) {
//     //   if (error) {
//     //     done(error);
//     //   } else {
//     //     done();
//     //   }
//     // });

//     //----------------
//     // let result = await request(app).get("/texto?text=olo").send();
//     // expect(res.status).to.equal(200).end(done);
//     // console.log("-----------k", result.status);
//     // this.timeout(10000);

//     // request(app)
//     //   .get("/texto?text=olo")
//     //   // .set("Accept", "application/json")
//     //   .set("content-type", "application/json")
//     //   .send()
//     //   .expect(200)
//     //   .end(function (error, response, body) {
//     //     if (error) {
//     //       done(error);
//     //     } else {
//     //       done();
//     //     }
//     //   });
//   });
// });
