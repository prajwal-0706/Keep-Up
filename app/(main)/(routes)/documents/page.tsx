'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        width={300}
        height={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        width={300}
        height={300}
        alt="Empty"
        className="dark:block hidden"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Keep Up
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
}
