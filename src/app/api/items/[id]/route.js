import prisma from "@/lib/prisma"; // Prisma client import

// DELETE - Delete an item
export async function DELETE(req, { params }) {
  const { id } = params;

  // Delete item by id
  const item = await prisma.item.delete({
    where: { id: parseInt(id) },
  });

  return new Response(JSON.stringify(item), { status: 200 });
}
