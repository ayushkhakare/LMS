import { useState, useEffect } from "react";

function Examlist() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [editQuestion, setEditQuestion] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  // Fetch exams when component loads
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch("http://localhost:3500/exam");
        if (!response.ok) throw new Error("Failed to fetch exams");
        const data = await response.json();
        setExams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  // Handle Exam Deletion
  const handleDeleteExam = async (id) => {
    if (!window.confirm("Are you sure you want to delete this exam?")) return;

    try {
      const response = await fetch(`http://localhost:3500/exam/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete exam");

      setExams(exams.filter((exam) => exam._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // Handle Question Update
  const handleUpdateQuestion = async (examId, questionId) => {
    try {
      const response = await fetch(`http://localhost:3500/exam/${examId}/question/${questionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionText: updatedText }),
      });

      if (!response.ok) throw new Error("Failed to update question");

      setExams((prevExams) =>
        prevExams.map((exam) =>
          exam._id === examId
            ? {
                ...exam,
                questions: exam.questions.map((q) =>
                  q._id === questionId ? { ...q, questionText: updatedText } : q
                ),
              }
            : exam
        )
      );

      setEditQuestion(null);
      setUpdatedText("");
    } catch (err) {
      alert(err.message);
    }
  };

  // Handle Question Deletion
  const handleDeleteQuestion = async (examId, questionId) => {
    if (!window.confirm("Are you sure you want to delete this question?")) return;

    try {
      const response = await fetch(`http://localhost:3500/exam/${examId}/question/${questionId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete question");

      setExams((prevExams) =>
        prevExams.map((exam) =>
          exam._id === examId
            ? { ...exam, questions: exam.questions.filter((q) => q._id !== questionId) }
            : exam
        )
      );
    } catch (err) {
      alert(err.message);
    }
  };

  // Handle Option Deletion
  const handleDeleteOption = async (examId, questionId, optionId) => {
    if (!window.confirm("Are you sure you want to delete this option?")) return;

    try {
      const response = await fetch(
        `http://localhost:3500/exam/${examId}/question/${questionId}/option/${optionId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to delete option");

      setExams((prevExams) =>
        prevExams.map((exam) =>
          exam._id === examId
            ? {
                ...exam,
                questions: exam.questions.map((q) =>
                  q._id === questionId
                    ? { ...q, options: q.options.filter((opt) => opt.optionID !== optionId) }
                    : q
                ),
              }
            : exam
        )
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Exam List</h1>

        {loading && <p className="text-center text-gray-400">Loading exams...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {exams.length === 0 && !loading ? (
          <p className="text-gray-400 text-center">No exams available.</p>
        ) : (
          <ul>
            {exams.map((exam) => (
              <li key={exam._id} className="bg-gray-800 p-4 rounded-md mb-3 flex justify-between items-center shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold">{exam.title} - {exam.subject}</h3>
                  <p className="text-gray-400">{exam.questions.length} questions</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedExam(exam)}
                    className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 transition"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => handleDeleteExam(exam._id)}
                    className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for Viewing & Editing Questions */}
      {selectedExam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-2xl w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedExam.title} - {selectedExam.subject}</h2>
            <ul className="space-y-4">
              {selectedExam.questions.map((q, index) => (
                <li key={q._id} className="bg-gray-800 p-4 rounded-md">
                  {editQuestion === q._id ? (
                    <div>
                      <input
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                      />
                      <button
                        onClick={() => handleUpdateQuestion(selectedExam._id, q._id)}
                        className="mt-2 bg-green-600 px-3 py-1 rounded-md hover:bg-green-700 transition"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium">{index + 1}. {q.questionText}</p>
                      <button
                        onClick={() => { setEditQuestion(q._id); setUpdatedText(q.questionText); }}
                        className="mt-2 bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(selectedExam._id, q._id)}
                        className="ml-2 bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  <ul className="mt-2 space-y-1">
                    {q.options.map((opt) => (
                      <li key={opt.optionID} className="flex justify-between items-center">
                        <span className={`${q.correctAnswer === opt.optionID ? 'text-green-400' : 'text-gray-300'}`}>
                          {opt.optionID}. {opt.optionText}
                        </span>
                        <button
                          onClick={() => handleDeleteOption(selectedExam._id, q._id, opt.optionID)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ✖
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Examlist;
