import { useState, useEffect } from "react";
import Examlist from "./Examlist";

function ExamManagement() {
  const [exams, setExams] = useState([]);
  const [newExam, setNewExam] = useState({ title: "", subject: "", questions: [] });
  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    options: [
      { optionID: "A", optionText: "" },
      { optionID: "B", optionText: "" },
      { optionID: "C", optionText: "" },
      { optionID: "D", optionText: "" }
    ],
    correctAnswer: ""
  });

  useEffect(() => {
    fetch("http://localhost:3500/exam")
      .then((res) => res.json())
      .then((data) => setExams(data))
      .catch((error) => console.error("Error fetching exams:", error));
  }, []);

  const addQuestion = () => {
    if (!newQuestion.questionText || newQuestion.options.some(opt => !opt.optionText) || !newQuestion.correctAnswer) {
      return alert("Please fill all fields in the question!");
    }
  
    setNewExam({
      ...newExam,
      questions: [...newExam.questions, { 
        questionText: newQuestion.questionText,
        options: newQuestion.options,
        correctAnswer: newQuestion.correctAnswer
      }]
    });
  
    setNewQuestion({
      questionText: "",
      options: [
        { optionID: "A", optionText: "" },
        { optionID: "B", optionText: "" },
        { optionID: "C", optionText: "" },
        { optionID: "D", optionText: "" }
      ],
      correctAnswer: ""
    });
  };
  
  const handleAddExam = async () => {
    if (!newExam.title || !newExam.subject) {
      return alert("Title and Subject are required!");
    }
    if (newExam.questions.length === 0) {
      return alert("At least one question is required!");
    }

    const response = await fetch("http://localhost:3500/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExam),
    });

    if (response.ok) {
      const addedExam = await response.json();
      setExams([...exams, addedExam]);
      setNewExam({ title: "", subject: "", questions: [] });
    } else {
      console.error("Error adding exam:", response);
      alert("Failed to add exam");
    }
  };

 
  return (
    <section className="bg-gray-900 min-h-screen p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Exam Management</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-medium mb-4">Add New Exam</h2>
          <input type="text" placeholder="Title" className="w-full p-2 rounded bg-gray-700 text-white mb-2"
            value={newExam.title} onChange={(e) => setNewExam({ ...newExam, title: e.target.value })} />
          <input type="text" placeholder="Subject" className="w-full p-2 rounded bg-gray-700 text-white mb-2"
            value={newExam.subject} onChange={(e) => setNewExam({ ...newExam, subject: e.target.value })} />

          <div className="bg-gray-700 p-4 rounded-md mb-4">
            <h3 className="text-xl mb-2">Add Questions</h3>
            <input type="text" placeholder="Question" className="w-full p-2 rounded bg-gray-600 text-white mb-2"
              value={newQuestion.questionText} onChange={(e) => setNewQuestion({ ...newQuestion, questionText: e.target.value })} />
            
            {newQuestion.options.map((opt, index) => (
              <input key={index} type="text" placeholder={`Option ${index + 1}`} className="w-full p-2 rounded bg-gray-600 text-white mb-2"
                value={opt.optionText} onChange={(e) => {
                  const newOptions = [...newQuestion.options];
                  newOptions[index].optionText = e.target.value;
                  setNewQuestion({ ...newQuestion, options: newOptions });
                }} />
            ))}
            
            <input type="text" placeholder="Correct Answer (A, B, C, or D)" className="w-full p-2 rounded bg-gray-600 text-white mb-2"
              value={newQuestion.correctAnswer} onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })} />
            
            <button onClick={addQuestion} className="bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Add Question</button>
          </div>

          <button onClick={handleAddExam} className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Submit Exam</button>
        </div>

       <Examlist></Examlist>
      
      </div>
    </section>
  );
}

export default ExamManagement;
