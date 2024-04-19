import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 py-16 lg:py-[50px]">
      <div className="container px-0 xl:px-24 2xl:px-32 3xl:px-40">
        <div className="flex flex-wrap gap-10 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 3xl:gap-20">
        <div
              className={`relative mb-4 sm:mb-8 w-[450px] xl:w-[450px] 2xl:w-[450px] 3xl:w-[500px]
                    h-[450px]  xl:h-[450px] 2xl:-[450px] 3xl:h-[500px] `}
            >
              <Image
                src="/images/about/girl.png"
                alt="about image"
                fill
                className="h-full w-full object-cover object-center"
              />
            </div>

          <div className="w-full px-4 lg:w-1/2 content-center">
            <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
              What Are You Looking For?
              <span className="text-3xl font-normal md:text-[40px]">
                {" "}
                Get Started Now{" "}
              </span>
            </h2>
            <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
              Let's make the world more beautiful with each other's hands.
            </p>
            <div className="mx-auto text-center">
              <Link
                href="/"
                className="inline-block rounded-md border border-transparent bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-primary/80"
              >
                Start üboost
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Image width={200} height={200} className="absolute z-[-1] top-0 left-0 object-center opacity-70" src={'/images/calltoaction/heart-shine-svgrepo-com.svg'} alt="heart" />
    </section>
  );
};

export default CallToAction;
