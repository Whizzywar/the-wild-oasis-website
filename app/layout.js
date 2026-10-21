import Navigation from "@/app/components/navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright © 2023 The Wild Oasis. All rights reserved.</footer>
      </body>
    </html>
  );
}
