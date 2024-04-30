import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full px-4 sm:w-full md:w-full 2xl:w-1/2">
              <div className="mb-12 max-w-full items-center px-2 sm:px-2 md:px-0 lg:px-8 lx:px-10 2xl:px-14 3xl:px-20">
                <h2 className="mb-5 text-3xl font-bold text-primary text-center dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Our Platform
                </h2>
                <p className="mb-10 text-xl leading-relaxed text-body-color dark:text-dark-6">
                  At üboost, we are reimagining fundraising with accountability, transparency, and connectedness at the forefront. Unlike traditional platforms, we offer a unique ecosystem that empowers boosters, campaigners, and beneficiaries alike.
                </p>
                <div className="mx-auto text-center">
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/80"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-4 2xl:w-1/2">
              <div className="flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4 w-2/3">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 h-[200px] sm:h-[350px] md:h-[350px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] 3xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="about image"
                      fill
                      className="object-cover object-center rounded-3xl"
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 h-[200px] sm:h-[350px] md:h-[350px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] 3xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about-image-02.png"
                      alt="about image"
                      fill
                      className="object-cover object-center rounded-3xl bg-ublue-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
