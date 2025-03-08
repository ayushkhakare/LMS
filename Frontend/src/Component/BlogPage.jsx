import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("http://localhost:3500/blogs");
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="text-center text-lg mt-10 text-white">Loading blogs...</div>;
    }

    if (error) {
        return <div className="text-center text-red-400 mt-10">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-800 p-6">
            <h1 className="text-4xl font-bold text-center text-white mb-8">
                Latest Blogs from Arrayalogic Academy
            </h1>

            {blogs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="bg-neutral-800 dark:bg-[#181a1b] rounded-lg shadow-md overflow-hidden">
                            {blog.image && (
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-5">
                                <h2 className="text-2xl font-semibold text-white mb-2">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-300 text-sm mb-2">
                                    By {blog.author} | {new Date(blog.date).toDateString()}
                                </p>
                                <p className="text-gray-200 mb-4">
                                    {blog.description ? blog.description.substring(0, 150) + "..." : "No description available."}
                                </p>
                                <Link to={`/blogpage/${blog._id}`} className="text-blue-300 hover:underline font-medium">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-300 text-lg">No blogs available at the moment.</p>
            )}
        </div>
    );
}

export default BlogPage;
