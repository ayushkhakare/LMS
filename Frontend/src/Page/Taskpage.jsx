import React, { useState } from "react";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";

const tasks = [
  {
    id: 1,
    title: "Reverse a String",
    description: "Write a function to reverse a given string.",
    language: "javascript",
    template: `function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
`,
  },
  {
    id: 2,
    title: "Find Factorial",
    description: "Write a function to compute the factorial of a given number.",
    language: "python",
    template: `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

print(factorial(5)) # Output: 120
`,
  },
  {
    id: 3,
    title: "Sum of Array",
    description: "Write a function to find the sum of an array of numbers.",
    language: "cpp",
    template: `#include <iostream>
using namespace std;

int sumArray(int arr[], int size) {
    int sum = 0;
    for(int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << sumArray(arr, 5);
    return 0;
}
`,
  },
];

function Taskpage(){
  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  const [code, setCode] = useState(selectedTask.template);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: selectedTask.language,
        version: "latest",
        files: [{ content: code }],
      });
      setOutput(response.data.run.output);
    } catch (error) {
      setOutput("Error executing the code");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Task Solver</h1>

        <div className="mb-4">
          <label className="font-semibold text-lg">Choose a Task:</label>
          <select
            className="ml-2 p-2 border rounded-md"
            onChange={(e) => {
              const task = tasks.find((t) => t.id === Number(e.target.value));
              setSelectedTask(task);
              setCode(task.template);
              setOutput("");
            }}
          >
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.title}
              </option>
            ))}
          </select>
        </div>

        <p className="text-gray-700 font-semibold">{selectedTask.description}</p>

        <div className="mt-4">
          <CodeMirror
            value={code}
            height="200px"
            extensions={[
              selectedTask.language === "javascript" ? javascript() :
              selectedTask.language === "cpp" ? cpp() : python(),
            ]}
            onChange={(value) => setCode(value)}
            className="border p-2 rounded-md"
          />
        </div>

        <button
          onClick={handleRun}
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Run Code
        </button>

        <div className="mt-4 p-3 border rounded-md bg-gray-50">
          <h2 className="font-semibold text-lg">Output:</h2>
          <pre className="text-sm text-gray-800">{output || "Run your code to see the output"}</pre>
        </div>
      </div>
    </div>
  );
}

export default Taskpage;
