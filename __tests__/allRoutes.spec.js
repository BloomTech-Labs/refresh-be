const app = require("../index.js");
const supertest = require("supertest");
const req = supertest(app);

describe("Returns a route catalog for unauthenticated users", () => {
  afterAll(done => {
    req.end();
    app.close(done);
  });

  it("Should Return Catalog of all documented Routes", async done => {
    const res = await req.get("/testRoutes");

    routes = res.body;
    expect(res.status).toBe(200);

    return done();
  });
});
