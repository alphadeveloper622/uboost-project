"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../_Common/SectionTitle";

const More = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-6 md:py-6 lg:py-6">
      <div className="container">
        <SectionTitle
          title=""
          paragraph="More"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
               
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default More;
