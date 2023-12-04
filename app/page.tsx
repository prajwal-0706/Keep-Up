'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Home() {
  const [isloading, setIsloading] = useState(false);
  return (
    <section className="flex h-[100vh] items-center justify-center">
      {isloading ? (
        <ButtonLoading />
      ) : (
        <Button
          onClick={() => {
            setIsloading((prev) => !prev);
          }}
        >
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      )}
    </section>
  );
}

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loging in...
    </Button>
  );
}
