import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="Keep Up"
          width={128}
          height={128}
          className="rounded-full"
        />
        <h1 className="mt-8 text-4xl font-bold text-gray-900">Keep Up</h1>
        <p className="mt-4 text-gray-600">
          This Project is used to keep up the notes like a diary or a notion app
        </p>
      </div>
    </main>
  );
}
