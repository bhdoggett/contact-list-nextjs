import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ContactsProvider from "./contexts/ContactsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contacts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactsProvider>{children}</ContactsProvider>
      </body>
    </html>
  );
}
