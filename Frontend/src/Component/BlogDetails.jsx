import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Received Blog ID in frontend:", id); // Debugging

        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:3500/blogs/${id}`);
                console.log("Response status:", response.status); // Debugging

                if (!response.ok) {
                    throw new Error(`Failed to fetch blog (Status: ${response.status})`);
                }

                const data = await response.json();
                console.log("Fetched blog:", data); // Debugging
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <div className="text-center text-lg text-white mt-10">Loading blog...</div>;
    }

    if (error) {
        return <div className="text-center text-red-400 mt-10">Error: {error}</div>;
    }

    if (!blog) {
        return <div className="text-center text-gray-300 mt-10">Blog not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-800 p-6 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-neutral-800 dark:bg-[#181a1b] rounded-lg shadow-lg overflow-hidden">
                {blog.image && (
                    <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                )}
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
                    <p className="text-gray-200 text-sm mb-4">
                        By <span className="font-semibold">{blog.author}</span> |{" "}
                        {new Date(blog.date).toDateString()}
                    </p>
                    <p className="text-gray-300 leading-relaxed">{blog.description}</p>
                    <Link to="/" className="block text-blue-300 hover:underline mt-6 font-medium">
                        ← Back to Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
