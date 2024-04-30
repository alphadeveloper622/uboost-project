import Link from "next/link";
import Image from "next/image";

const Why_uboost = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-r from-ublue-200 to-blue-700 py-16 lg:py-[30px]">
      <div className="container">
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full sm:w-10/12 mb:w-7/12 lg:w-8/12 lg:px-0 xl:w-1/2 xl:px-4 2xl:w-1/2 2xl:px-18 3xl:w-1/2 3xl:px-20">
            <div className={`relative mb-4 w-auto h-auto`}>
              <Image
                src="/images/about/girl.png"
                alt="about image"
                width={450}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full px-4 xl:w-1/2 content-center">
            <h2 className="mb-2.5 text-3xl font-bold text-white text-center md:text-[38px] md:leading-[1.44]">
              <span>What Are You Looking For?</span>
              <br></br>
              <span className="text-3xl font-normal md:text-[40px]">
                {" "}
                Get Started Now{" "}
              </span>
            </h2>

            <p className="mx-auto mb-6 py-10 max-w-[515px] text-base leading-[1.5] text-white">
              At üboost, rest assured that your generous contributions make a tangible difference in the causes you support, as we diligently oversee the utilization of funds.
            </p>
            <div className="mx-auto text-center">
              <Link
                href="/"
                className="inline-block rounded-md border border-transparent bg-primary px-7 py-2 text-base font-medium text-white transition hover:bg-primary/80"
              >
                Start A Fundraiser!
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Image width={200} height={200} className="absolute z-[-1] top-0 left-0 object-center opacity-70" src={'/images/whyuboost/heart-shine-svgrepo-com.svg'} alt="heart" />
    </section>
  );
};

export default Why_uboost;
