import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  const { name, email, password } = await req.json();

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const newUser = await prisma.user.create({
    data: {
      name,           // Include the name
      email,          // Include the email
      password: hashedPassword, // Hashed password
    },
  });

  return new Response(JSON.stringify(newUser), { status: 201 });
}
