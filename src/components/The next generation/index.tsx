import Image from "next/image";

const The_Next_Generation = () => {
  return (
    <div className="relative aspect-[192/170] overflow-hidden pt-8 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 3xl:pt-20">
      <div className="flex flex-col">
        <div className="basis-1/12 flex-grow">
          <div className="z-30 relative flex items-center text-white">
            <div className="relative flex flex-row h-full w-full text-sm text-center text-md sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-normal">
              <div className="basis-3/12"></div>
              <div className="basis-1/12">
                <div className="flex justify-center h-auto">
                  <div className="w-4/5">
                    <Image
                      src="/images/uboost.png"
                      alt="mark"
                      height={400}
                      width={320}
                    />
                  </div>
                </div>
              </div>
              <div className="basis-1/12 content-center">
                <h1>
                  ATHLETES
                </h1>
                <h1>
                  HELPING
                </h1>
                <h1>
                  ATHLETES
                </h1>
              </div>
              <div className="basis-6/12"></div>
            </div>
          </div>
        </div>
        <div className="basis-2/12 flex-grow">
          <div className="z-30 relative flex items-center w-full h-full text-white">
            <div className="relative flex flex-row h-full w-full text-center text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-medium leading-normal">
              <div className="basis-3/12"></div>
              <div className="basis-1/12 content-center text-ublue-950 text-border font-bold text-outlinewhite">
                <h1>
                  TALENT
                </h1>
                <h1>
                  BOOST
                </h1>
                <h1>
                  AFRICA
                </h1>
              </div>
              <div className="basis-1/12"></div>
              <div className="basis-3/12">
                <div className="flex justify-center h-auto">
                  <div className="relative w-full border-[1rem] border-ublue-300 rounded-full overflow-hidden">
                    <Image
                      src="/images/the next generation/africa girl.jpg"
                      alt="Girl"
                      height={820}
                      width={820}
                    />
                  </div>
                </div>
              </div>
              <div className="basis-3/12"></div>
            </div>
          </div>
        </div>
        <div className="basis-3/12 flex-grow">
          <div className="z-30 relative  flex flex-column w-full h-full text-white">
            <div className="px-8 pt-10 sm:pt-24 md:pt-32 lg:pt-36 xl:pt-44 2xl:pt-52 3xl:pt-60 sm:px-8 md:px-18 lg:px-20 xl:px-24 2xl:px-48 3xl:px-52">
              <h1 className="text-left text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-normal">
                THE NEXT GENERATION
              </h1>
              <h4 className="text-left text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
                Join üboost in empowering young athletes across Africa through the Talent Boost Africa initiative! This groundbreaking program offers financial assistance of up to $2,400 per year ($200 per month) to amateur athletes ages 6-17, covering coaching fees, fitness training, and gear and equipment. Coaches and sports organizations can refer eligible candidates by filling out the form below. Selected athletes will be contacted directly. Applications open on April 15, 2024. The program begins on May 1, 2024. Don&apos;t miss this opportunity to make a difference in the lives of aspiring athletes! Eligible sports include Basketball, Football (Soccer), Tennis, Golf, Track & Field, and Olympic wrestling.
              </h4>
            </div>
          </div>
        </div>
        <div className="basis-5/12">
          <div className="z-30 relative w-full h-full bg-transparent">

          </div>
        </div>
      </div>
      <Image fill={true} src="/images/the next generation/background.jpg" alt="back image" className="absoulte left-0 -bottom-10 z-20 absolute object-fill" />
    </div>
  );
};

export default The_Next_Generation;
