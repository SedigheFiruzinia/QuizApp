const quizRouter = require("express").Router();
const quizSchema = require("../schema/quiz");

let newData = null;

const getData = () => {
  const result = newData;
  newData = null;
  return result;
};

quizRouter.get("/quizes/", async (request, response) => {
  const quizes = await quizSchema.find({});
  response.json(quizes);
});

quizRouter.get("/quizes/:id", async (request, response) => {
  const quizes = await quizSchema.findOne({ _id: request.params.id });
  response.json(quizes);
});

quizRouter.post("/quizes/", async (request, response, next) => {
  const body = request.body;
  const quiz = new quizSchema({
    text: body.text || "",
    option: body.option,
  });
  const created = await quiz.save();
  newData = created;
  response.status(201).json(created);
});

quizRouter.get("/new", async (request, response) => {
  response.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });
  let eventInterval = setInterval(() => {
    console.log(newData);
    response.write("data:" + JSON.stringify(getData()));
    response.write("\n\n");
    // newData = null;
  }, 10000);
  request.on("close", () => {
    clearInterval(eventInterval);
    response.end();
    console.log("Stopped sending events.");
  });
});

module.exports = quizRouter;
