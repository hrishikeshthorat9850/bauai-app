import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import RegisterUser from "./RegisterClient";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.email !== "admin@example.com") {
    return <div className="p-6 text-red-500">Access Denied</div>;
  }

  return <RegisterUser />;
}
