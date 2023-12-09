'use client';

import useScrollTop from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#000] fixed flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-4">
        {isLoading && <Spinner />}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size="sm" variant="ghost">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Keep Up</Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button size="sm" variant="ghost" asChild>
              <Link href="/documents">
                Enter Keep Up
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
