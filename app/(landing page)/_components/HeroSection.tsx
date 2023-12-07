import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px]  sm:w-[350px] sm:h-[350px] md:h-[480px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="hidden object-contain dark:block"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] hidden w-[400px] md:block">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="hidden object-contain dark:block"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
}
