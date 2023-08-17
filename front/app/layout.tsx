"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CI/CD Study",
  description: "CI/CD Study with GitHub Actions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center">
          <div className="flex w-full p-4 gap-4 bg-neutral-600">
            <Link className="flex justify-center align-middle border-b-2 border-transparent text-white hover:border-neutral-300 w-32 px-4 py-2" href="/">
              トップ
            </Link>
            <Link className="flex justify-center align-middle border-b-2 border-transparent text-white hover:border-neutral-300 w-32 px-4 py-2" href="/data">
              データ
            </Link>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-20">{children}</main>
      </body>
    </html>
  );
}
