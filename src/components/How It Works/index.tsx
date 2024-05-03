"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../_Common/SectionTitle";

const HowItWorks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative bg-white z-10 py-5 pt-10 lg:pb-16 lg:pt-20">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Yes, that is true! Everyone has the potential to achieve their dreams with hard work, dedication, and perseverance. It's important to believe in yourself and not give up when faced with challenges or setbacks. Is there anything specific that I can help you with in regards to achieving your dreams?"
          center
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              {isOpen ? (
                <video className="h-full w-full rounded-lg" controls autoPlay onEnded={() => setOpen(false)}>
                  <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image src="/images/how it works/how.jpg" alt="video image" fill />
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      onEnded={() => setOpen(false)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default HowItWorks;
