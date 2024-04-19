import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 py-16 lg:py-[50px]">
      <div className="container px-0 xl:px-24 2xl:px-32 3xl:px-40">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <img className="object-cover object-center w-[600px] h-[600px]" src="/images/about/girl.png" alt="girl" />
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
      <img className="absolute z-[-1] top-0 left-0 object-center w-[200px] h-[200px] opacity-70" src={'/images/calltoaction/heart-shine-svgrepo-com.svg'} />
    </section>
  );
};

export default CallToAction;
