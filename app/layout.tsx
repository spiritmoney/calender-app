import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  subsets: ["latin", "cyrillic", "cyrillic-ext", "greek", "greek-ext"],
});

const roboto = Roboto({
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900",
  ],
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic", "cyrillic-ext", "greek", "greek-ext"],
});

export const metadata: Metadata = {
  title: "Loveworld Programs Calendar",
  description: "Import all upcoming Loveworld programs directly to your calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={firaCode.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
