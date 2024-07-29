import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joyeux Anniversaire, Arturo!",
  description: "Joyeux Anniversaire, Arturo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`overflow-hidden ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div className="md:hidden h-full flex items-center justify-center">
            Te dije que no se puede en cel papu :v
          </div>
          <div className="h-full hidden md:block">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
