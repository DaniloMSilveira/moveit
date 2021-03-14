import request from "supertest";
import { app } from "../app";

describe("Users", () => {
  it("Should be able to create a new user", async () => {
    const res = await request(app).post("/users").send({
      username: 'easynvest'
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("Should be able to remove a user", async () => {
    const res = await request(app).delete("/users/easynvest").send({});

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("removed");
  });
});
