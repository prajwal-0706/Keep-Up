import React from 'react';
import Navbar from './_components/Navbar';

export default function MaketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full dark:bg-[#000]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
