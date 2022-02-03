const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, ""],
    },
    option: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

quizSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.date = returnedObject.createdAt.toString().substring(0, 15);
    returnedObject.time = returnedObject.createdAt.toString().substring(16, 24);
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
  },
});

module.exports = mongoose.model("quiz", quizSchema);
