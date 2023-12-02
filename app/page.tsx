import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1
        className="text-4xl font-bold text-center text-gray-900"
        style={{ lineHeight: 1.25 }}
      >
        Hello World
      </h1>
    </main>
  );
}
