import Footer from './_components/Footer';
import Heading from './_components/Heading';
import HeroSection from './_components/HeroSection';

const Page = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gapy-y-8 flex-1 dark:bg-[#000]">
        <Heading />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
