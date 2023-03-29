import "./globals.css";

export const metadata = {
  title: "Talkies",
  description:
    "An app to track movies that you've watched, and ones you plan to watch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
