// src/app/api/items/[id]/route.js (assuming you are following the RESTful convention)
import prisma from "@/lib/prisma";

export async function DELETE(req, { params }) {
  const { id } = params; // Get the item ID from the URL

  try {
    // Delete the item from the database
    const deletedItem = await prisma.item.delete({
      where: { id: parseInt(id) },
    });

    return new Response(JSON.stringify(deletedItem), { status: 200 });
  } catch (error) {
    console.error("Error deleting item:", error);
    return new Response("Failed to delete item", { status: 500 });
  }
}
