import { Poppins } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sammey Engitech | Building the Future",
  description: "We design, build and integrate world-class technologies — from web and mobile applications to AI systems, embedded chips and robotics.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Sammey Engitech | Building the Future",
    description: "We design, build and integrate world-class technologies — from web and mobile applications to AI systems, embedded chips and robotics.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-gray-950 text-white`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
