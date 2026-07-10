import "./globals.css";

export const metadata = {
  title: "Wedding Booking System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}