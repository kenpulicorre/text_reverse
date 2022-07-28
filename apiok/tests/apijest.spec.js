//-----test with jest  and supertest
const request = require("supertest");
const app = require("../src/app");

describe("get query, return okey with a text", () => {
  test("should respond with a 200 status code, with reverse ok", async () => {
    const response = await request(app).get("/texto?text=kenneth");
    // console.log("-----------------respuesta", response);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ text: "htennek" });
  });

  test("should respond with a 200 status code, correct query , even with mayus letters", async () => {
    const response = await request(app).get("/texto?text=kenneTH");
    // console.log("-----------------respuesta", response);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ text: "htennek" });
  });

  test("should respond with a 200 status code, palindromo has to return with  true response", async () => {
    const response = await request(app).get("/texto?text=olo");
    // console.log("-----------------respuesta", response);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ text: "olo", palindrome: true });
  });

  test("should respond with a 400 status code, it return json messaje with { error: 'no text' } letters and not other characters", async () => {
    const response = await request(app).get("/texto?text=olo*");
    // console.log("-----------------respuesta", response);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: "no text" });
  });
  test("should respond with a 200 status code, it return  []  or an array with values or empty , but array ", async () => {
    // const response = await request(app).get("/texto?text=olo");
    // console.log("-----------------respuesta", response);
    const response = await request(app).get("/textos");
    console.log("------------------", response);
    expect(response.body).toBeInstanceOf(Array);
  });
});
