import prisma from "@/lib/prisma"; // Prisma client import

// POST - Create an item
export async function POST(req) {
  const { title, description, userId } = await req.json();
  
  // Create new item
  const item = await prisma.item.create({
    data: {
      title,
      description,
      createdBy: userId, // logged-in user ID
    },
  });

  return new Response(JSON.stringify(item), { status: 201 });
}

// GET - Get all items
export async function GET() {
  const items = await prisma.item.findMany({
    include: { user: true }, // To get user data if needed
  });

  return new Response(JSON.stringify(items), { status: 200 });
}
