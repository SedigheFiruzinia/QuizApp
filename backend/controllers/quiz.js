const quizRouter = require("express").Router();
const quizSchema = require("../schema/quiz");

quizRouter.get("/", async (request, response) => {
  const quizes = await quizSchema.find({});
  response.json(quizes);
});

quizRouter.get("/:id", async (request, response) => {
  const quizes = await quizSchema.findOne({ _id: request.params.id });
  response.json(quizes);
});

quizRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const quiz = new quizSchema({
    text: body.text || "",
    option: body.option,
  });
  const created = await quiz.save();
  response.status(201).json(created);
});

module.exports = quizRouter;
