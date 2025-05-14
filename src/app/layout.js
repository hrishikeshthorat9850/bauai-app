import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import Navbar from "../components/Navbar";


export const metadata = {
  title: "BAUAI Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
