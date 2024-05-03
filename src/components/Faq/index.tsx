"use client";
import SectionTitle from "@/components/_Common/SectionTitle";
import { useState } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Loader from "@/components/_Common/Loader";

function AccordionIcon({ id, open }: { id: any, open: any }) {
  return (
    <svg className={`${id === open ? "-rotate-90" : "rotate-90"} h-5 w-5 transition-transform`} width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
      <g style={{ fill: "#3758f9" }}>
        <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
      </g>
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="relative z-20 overflow-hidden bg-ublue-100 pt-20 dark:bg-dark lg:pb-16 xl:pt-20 px-16 lg:px-32 xl:px-40">
      <div className="container">
        <SectionTitle
          subtitle=""
          title="FAQ"
          paragraph=""
          width="640px"
          center
        />
        <div className="py-5">
          <Accordion open={open === 5} icon={<AccordionIcon id={5} open={open} />}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(5)}
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className="relative h-16 flex flex-row">
                <div className="basis-[2/8] flex justify-center items-center ">

                </div>
                <div className="basis-[6/8] px-5 flex-grow">
                  <div className="flex w-full h-full items-center">
                    <div className="flex flex-col items-center">
                      <div className="flex w-full justify-start">
                        <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                          What happens if I don&apos;t reach my fundraising goal?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-left leading-normal text-gray-600 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                No worries! üboost is flexible, and you keep whatever funds you&apos;ve raised. Every little bit counts, and we celebrate all achievements.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<AccordionIcon id={6} open={open} />}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(6)}
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className="relative h-16 flex flex-row">
                <div className="basis-[2/8] flex justify-center items-center ">

                </div>
                <div className="basis-[6/8] px-5 flex-grow">
                  <div className="flex w-full h-full items-center">
                    <div className="flex flex-col items-center">
                      <div className="flex w-full justify-start">
                        <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                          When can I use my funds?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-left leading-normal text-gray-600 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                You can start using your funds when you have raised $250. At that point, a virtual and/or physical spending card will be issued to you. You will be able to purchase anything from our approved vendor list.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 7} icon={<AccordionIcon id={7} open={open} />}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(7)}
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className="relative h-16 flex flex-row">
                <div className="basis-[2/8] flex justify-center items-center ">

                </div>
                <div className="basis-[6/8] px-5 flex-grow">
                  <div className="flex w-full h-full items-center">
                    <div className="flex flex-col items-center">
                      <div className="flex w-full justify-start">
                        <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                          Is there an age restriction on üboost?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-left leading-normal text-gray-600 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                üboost is designed for users of all ages, including students. However, for those under 13, you will need parental consent in the registration process.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 8} icon={<AccordionIcon id={8} open={open} />}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(8)}
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className="relative h-16 flex flex-row">
                <div className="basis-[2/8] flex justify-center items-center ">

                </div>
                <div className="basis-[6/8] px-5 flex-grow">
                  <div className="flex w-full h-full items-center">
                    <div className="flex flex-col items-center">
                      <div className="flex w-full justify-start">
                        <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                          How to buy it?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-left leading-normal text-gray-600 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                To make your first listing, you&apos;ll have to first mint the NFT. Set the price of the artwork in Enefty, set the royalty, and mint the NFT. The only fees to be paid here are the gas fees.
              </p>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 45.6673 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0013 132)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0013 117.333)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0013 102.667)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0013 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 31.0013 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0013 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0013 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0013 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0013 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0013 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3333 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 16.3333 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3333 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3333 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3333 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3333 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3333 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 1.66732 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#13C296"
            />
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 45.6673 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0006 132)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0006 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0006 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0006 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.0008 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0008 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0008 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0008 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0008 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0008 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3341 132)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3341 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3341 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3341 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 16.3338 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3338 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3338 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3338 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3338 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3338 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 1.66732 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#3758F9"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Faq;
