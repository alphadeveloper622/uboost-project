import Image from "next/image";

const The_Next_Generation = () => {
  return (
    <div className="relative aspect-[192/170]">
      <div className="w-full h-full">
        <div className=" relative flex flex-col items-center justify-center h-full w-full">
          <div className="basis-1/12 w-full h-full"></div>
          <div className="basis-2/12 w-full h-full">
            <div className="z-30 relative flex text-white">
              <div className="relative flex flex-row h-full w-full text-sm text-center text-md sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-normal">
                <div className="basis-4/12"></div>
                <div className="basis-1/12">
                  <div className="flex justify-center h-full p-1 lg:p-2 xl:p-3 2xl:p-4 3xl:p-5">
                    <div className="w-full h-full">
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
          <div className="basis-3/12 w-full h-full">
            <div className="z-30 relative text-white flex flex-row h-full w-full text-center text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-medium leading-normal">
              <div className="basis-4/12"></div>
              <div className="basis-1/12 content-center text-ublue-950 text-border font-bold md:text-outlinewhite-1 xl:text-outlinewhite-2 2xl:text-outlinewhite-3">
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
              <div className="basis-2/12 h-full w-full">
                <div className="flex justify-center ">
                  <div className="relative w-full border-[2px] sm:border-[4px] md:border-[8px] lg:border-[10px] xl:border-[12px] 2xl:border-[14px] 3xl:border-[1rem] border-ublue-300 rounded-full overflow-hidden">
                    <Image
                      src="/images/the next generation/africa girl.jpg"
                      alt="Girl"
                      height={820}
                      width={820}
                    />
                  </div>
                </div>
              </div>
              <div className="basis-4/12"></div>
            </div>
          </div>
          <div className="basis-1/12 w-full h-full"></div>
          <div className="basis-2/12 w-full h-full">
            <div className=" relative flex flex-row items-center justify-center h-full w-full">
              <div className="basis-2/12"></div>
              <div className="z-30 relative basis-8/12 flex flex-col w-full h-full text-white">
                <h1 className="text-left text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-normal">
                  THE NEXT GENERATION
                </h1>
                <h4 className="text-left text-[6px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
                  Join üboost in empowering young athletes across Africa through the Talent Boost Africa initiative! This groundbreaking program offers financial assistance of up to $2,400 per year ($200 per month) to amateur athletes ages 6-17, covering coaching fees, fitness training, and gear and equipment. Coaches and sports organizations can refer eligible candidates by filling out the form below. Selected athletes will be contacted directly. Applications open on April 15, 2024. The program begins on May 1, 2024. Don&apos;t miss this opportunity to make a difference in the lives of aspiring athletes! Eligible sports include Basketball, Football (Soccer), Tennis, Golf, Track & Field, and Olympic wrestling.
                </h4>
              </div>
              <div className="basis-2/12"></div>
            </div>


          </div>
          <div className="basis-1/12">
            <div className="z-30 relative flex flex-row w-full h-full bg-transparent">

            </div>
          </div>
          <div className="basis-2/12">
            <div className="z-30 relative w-full h-full bg-transparent">

            </div>
          </div>
        </div>
      </div>

      <Image fill={true} src="/images/the next generation/background.jpg" alt="back image" className="absoulte left-0 -bottom-10 z-20 absolute object-fill" />
    </div>
  );
};

export default The_Next_Generation;
