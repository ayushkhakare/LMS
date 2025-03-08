const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionID: { type: String, required: true }, // Change from ObjectId to String
  questionText: { type: String, required: true },
  options: [
    {
      optionID: { type: String, required: true },
      optionText: { type: String, required: true },
    }
  ],
  correctAnswer: { type: String, required: true },
});

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  questions: [QuestionSchema], // Array of questions
});

module.exports = mongoose.model("Exam", ExamSchema);
