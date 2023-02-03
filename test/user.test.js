describe("Our very first test", () => {
  it("First taste case", async () => {
    expect(result).toBe("247");
  });

  it("should create a new post", async () => {
    const res = await userPostController(app).post("/user").send({
      username: "",
      password: "{ type: String, required: true }",
      email: " { type: String, required: true }",
      gender: "{ type: String, required: true }",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("Successfully created new user");
  });
});
