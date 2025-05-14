// "use client";

// import { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";

// export default function ItemsPage() {
//   const { data: session } = useSession();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchItems() {
//       const res = await fetch("/api/items");
//       const data = await res.json();
//       setItems(data);
//     }
//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             {session?.user.id === item.createdBy && (
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const handleDelete = async (itemId) => {
//   const res = await fetch(`/api/items/${itemId}`, {
//     method: "DELETE",
//   });
//   if (res.ok) {
//     // Handle success (e.g., refresh the list of items)
//   } else {
//     alert("Failed to delete item");
//   }
// };

/////////////////////////////////////////////////////////////////////////////////////////////

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ItemsPage() {
  const items = await prisma.item.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 border hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500">By: {item.user?.name || "Unknown"}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
