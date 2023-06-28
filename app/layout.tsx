import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Hub",
  description: "From Hills to Beaches we got a car for Every Place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
