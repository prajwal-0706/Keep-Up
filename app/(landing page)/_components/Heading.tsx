'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import { useConvexAuth } from 'convex/react';
import { Spinner } from '@/components/spinner';

export default function Heading() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{' '}
        <span className="underline">Keep Up</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Keep Up is the connected workspace where <br />
        better, faster work happens.
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Keep Up
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Keep Up
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
}
