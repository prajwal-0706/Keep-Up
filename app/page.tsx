import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Image
          src="/logo.svg"
          alt="Keep Up"
          width={200}
          height={200}
          className="rounded-full"
        />
      </Button>
    </main>
  );
}
