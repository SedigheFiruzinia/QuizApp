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
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
  },
});

module.exports = mongoose.model("quiz", quizSchema);
