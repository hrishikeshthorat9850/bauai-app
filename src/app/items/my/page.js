'use client'; // Marks the component as a client-side component

import { useState, useEffect } from 'react'; // Import hooks
import { useSession } from 'next-auth/react'; // Import next-auth's useSession hook
import prisma from "@/lib/prisma"; // Ensure this is imported for server-side calls if needed

export default function MyItemsPage() {
  const { data: session, status } = useSession(); // Get session info
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch session and items after page load
  useEffect(() => {
    if (status === "loading") return; // Wait until session is ready

    const fetchItems = async () => {
      if (!session) {
        alert("Please log in to view your items.");
        return;
      }

      try {
        const response = await fetch('/api/items'); // Adjust this route to your API
        const data = await response.json();

        setItems(data); // Set the fetched items
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [session, status]); // Trigger effect whenever session or status changes

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/items/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete item");
      }

      // Remove the deleted item from the state
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete item");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Items</h1>
      {items.length === 0 ? (
        <p>You haven’t created any items yet.</p>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="border p-4 rounded bg-white shadow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 mt-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
