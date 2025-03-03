import React, { useState, useEffect } from "react";
import { Edit, Trash2, PlusCircle, Search } from "lucide-react";

const API_URL = "http://localhost:3500/addcourse";

function CourseManage() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({ img: "", title: "", rating: "", price: "", teacher: "", description: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCourses(data);
      setFilteredCourses(data);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(term) ||
      course.teacher.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term)
    );
    setFilteredCourses(filtered);
  };

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });

      if (response.ok) {
        fetchCourses();
        closeModal();
      }
    } catch (error) {
      console.error("Error saving course", error);
    }
  };

  const handleEdit = (course) => {
    setCourseData(course);
    setEditId(course._id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setCourses(courses.filter((course) => course._id !== id));
      setFilteredCourses(filteredCourses.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Error deleting course", error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCourseData({ img: "", title: "", rating: "", price: "", teacher: "", description: "" });
    setEditId(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">Course Management</h1>

      <div className="flex justify-between mb-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md"
          />
          <Search className="absolute left-2 top-2 text-gray-400" size={20} />
        </div>

        {/* Add Course Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <PlusCircle size={20} /> Add Course
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course._id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={course.img} alt={course.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-gray-600">By {course.teacher}</p>
              <p className="text-gray-700">Rating: {course.rating}</p>
              <p className="text-green-600 font-bold">Price: ${course.price}</p>
              <p className="text-sm text-gray-500">{course.description}</p>

              <div className="flex gap-2 mt-3">
                <button onClick={() => handleEdit(course)} className="text-blue-500">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDelete(course._id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>

      {/* Modal for Add/Edit Course */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{editId ? "Edit Course" : "Add Course"}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="img" placeholder="Image URL" value={courseData.img} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              <input type="text" name="title" placeholder="Title" value={courseData.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              <input type="text" name="rating" placeholder="Rating" value={courseData.rating} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              <input type="text" name="price" placeholder="Price" value={courseData.price} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              <input type="text" name="teacher" placeholder="Teacher" value={courseData.teacher} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
              <textarea name="description" placeholder="Description" value={courseData.description} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />

              <div className="flex justify-end gap-2">
                <button type="button" onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">{editId ? "Update" : "Add"} Course</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseManage;
