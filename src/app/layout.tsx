import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/modules/layout/main";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from "@/modules/layout/ThemeRegistry";

import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Dashboard - Random User Data",
  description: "A dashboard displaying random user data from the Random User Generator API",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
