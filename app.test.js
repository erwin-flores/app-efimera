const request = require("supertest");
const app = require("./app");

test("la página principal responde", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toContain("Actividad 2.3. Ephemeral environments");
});

test("suma dos números", async () => {
  const res = await request(app).get("/sumar?a=2&b=3");
  expect(res.body.resultado).toBe(5);
});

test("rechaza valores que no son números", async () => {
  const res = await request(app).get("/sumar?a=hola&b=3");
  expect(res.status).toBe(400);
});
