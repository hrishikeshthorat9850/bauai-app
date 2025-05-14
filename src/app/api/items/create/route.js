import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { title, description } = await req.json();

  if (!title || !description) {
    return new Response("Missing fields", { status: 400 });
  }

  try {
    // Find the user by email to get the user ID
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const item = await prisma.item.create({
      data: {
        title,
        description,
        createdBy: user.id, // Use user ID
      },
    });

    return Response.json(item);
  } catch (err) {
    console.error("Error creating item:", err);
    return new Response("Failed to create item", { status: 500 });
  }
}
