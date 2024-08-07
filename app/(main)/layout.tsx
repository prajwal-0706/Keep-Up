'use client';

import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';

import { Spinner } from '@/components/spinner';
import Navigation from './_components/Navigation';
import { SearchCommand } from '@/components/search-command';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect('/');
  }

  return (
    <div className="h-full flex dark:bg-[#000] ">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
}
