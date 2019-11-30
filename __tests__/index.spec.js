const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const req = supertest(app);

describe("Renders Without Crashing", () => {

  afterAll(done => {
    req.end()
    app.close(done);
  });

  it("Default Route", async done => {
    const res = await req.get("/");

    expect(res.status).toBe(200);

    done();
  });
});
