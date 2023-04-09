import Navbar from "@/components/Navbar/Navbar";
import ToastWrapper from "@/components/ToastWrapper";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

import "./globals.css";

export const metadata = {
  title: "Talkies",
  description:
    "An app to track movies that you've watched, and ones you plan to watch.",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="min-h-screen bg-gradient-to-b from-red-400 to-slate-700">
            {/* @ts-expect-error async component */}
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                {props.children}
                {props.modal}
              </div>
            </div>
            <ToastWrapper />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
