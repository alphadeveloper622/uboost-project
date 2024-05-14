import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative aspect-[16/8] overflow-hidden">
      <div className=" relative flex flex-row items-center justify-center h-full">
        <div className="z-30 relative flex items-center basis-7/12 h-full text-white">
          <div className="flex-grow h-full text-center text-md sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-black-600 leading-normal">
            <div className="flex flex-col h-full content-start">
              <div className="basis-2/12"></div>
              <div className="basis-3/12">
                <div className="flex justify-center h-auto">
                  <div className="w-1/6">
                    <Image
                      src="/images/uboost.png"
                      alt="Girl"
                      height={200}
                      width={160}
                    />
                  </div>
                </div>
              </div>
              <div className="basis-2/12">
                <h1>
                  üboost: Fundraising
                </h1>
                <h1>
                  <strong>with accountability</strong>
                </h1>
              </div>
              <div className="basis-5/12"></div>
            </div>
          </div>
        </div>
        <div className="z-10 relative flex basis-5/12 h-full">
          <div className="relative w-3/4">
            <Image
              src="/images/hero/girl.png"
              alt="Girl"
              fill={true}
            />
          </div>
        </div>
      </div>
      <div className="z-5 absolute inset-y-0 right-0 w-1/2 bg-cover bg-no-repeat overflow-visible bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="z-5 absolute inset-0 w-1/2 bg-cover bg-no-repeat overflow-visible bg-cyan-500"></div>
      <Image fill={true} src="/images/hero/hero-bottom.png" alt="bottom image" className="absoulte left-0 -bottom-10 z-20 absolute object-fill" />
    </div>
  );
};

export default Hero;
