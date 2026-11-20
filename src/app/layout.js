
import "./globals.css";

export const metadata = {
  title: "Aishwarya Patil | Full Stack Developer",
  description:
    "Personal portfolio of Aishwarya Patil, showcasing projects, skills and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
