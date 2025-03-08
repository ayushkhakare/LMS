import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function EnrollmentManage() {
    const [purchases, setPurchases] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchPurchases();
    }, []);

    const fetchPurchases = async () => {
        try {
            const response = await fetch("http://localhost:3500/purchases");
            if (!response.ok) throw new Error("Failed to fetch purchases");

            const data = await response.json();
            if (Array.isArray(data)) {
                setPurchases(data);
            } else {
                setPurchases([]); 
            }
        } catch (error) {
            console.error("Error fetching purchases:", error);
            setError("Failed to fetch data. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (purchaseId) => {
        try {
            const response = await fetch(`http://localhost:3500/purchases/${purchaseId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setPurchases((prevPurchases) => prevPurchases.filter(purchase => purchase._id !== purchaseId));
            } else {
                console.error('Failed to delete purchase');
            }
        } catch (error) {
            console.error('Error deleting purchase:', error);
        }
    };

    if (loading) return <p className="text-white text-center mt-5">Loading...</p>;
    if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <NavLink to='/adminlayout' className="text-white text-2xl ml-3 mt-8">Home</NavLink>

            <h1 className="text-3xl font-bold mt-4">Purchased Courses</h1>

            {purchases.length === 0 ? (
                <p className="text-white text-center mt-5">No purchases found.</p>
            ) : (
                <table className="w-full mt-4 border border-gray-700">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-2 border border-gray-700">Purchase ID</th>
                            <th className="p-2 border border-gray-700">User Name</th>
                            <th className="p-2 border border-gray-700">Course Title</th>
                            <th className="p-2 border border-gray-700">Price</th>
                            <th className="p-2 border border-gray-700">Purchase Date</th>
                            <th className="p-2 border border-gray-700">Status</th>
                            <th className="p-2 border border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.map((purchase) => (
                            <tr key={purchase._id} className="text-center border border-gray-700">
                                <td className="p-2 border border-gray-700">{purchase._id}</td>
                                <td className="p-2 border border-gray-700">{purchase.userName || "N/A"}</td>
                                <td className="p-2 border border-gray-700">{purchase.courseName || "N/A"}</td>
                                <td className="p-2 border border-gray-700">₹{purchase.price}</td>
                                <td className="p-2 border border-gray-700">
                                    {new Date(purchase.purchaseDate).toLocaleDateString()}
                                </td>
                                <td className={`p-2 border border-gray-700 ${purchase.status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {purchase.status || "Pending"}
                                </td>
                                <td className="p-2 border border-gray-700">
                                    <button 
                                        className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-700"
                                        onClick={() => handleDelete(purchase._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default EnrollmentManage;
