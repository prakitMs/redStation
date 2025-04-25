import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.css";
import TopNav from "@/components/top-nav";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Red Station",
  icons: {
    icon: "/icons/logo.png",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EDFBFF]`}
      >
        <Provider>
          <>
            <TopNav />
            {children}
          </>
        </Provider>
      </body>
    </html>
  );
}
