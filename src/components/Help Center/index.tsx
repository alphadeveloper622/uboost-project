"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";

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

function AccordionLinkIcon({ linkurl }: { linkurl: string }) {
  return (
    <div className="scale-100 hover:scale-110 duration-150">
      <Link href={linkurl}>
        <svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <g style={{ fill: "#3758f9" }}>
            <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			        c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			        c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			        c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
          </g>
        </svg>
      </Link>
    </div>
  );
}

const Help_Center = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const [sendingmessage, setSendingMessage] = useState(false);
  const [sendingcode, setSendingCode] = useState(false);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Help Center"
        left_link_name={'Back'}
        left_link_url={'/fundraising-dashboard'}
        left_link_icon={getNormalLinkIcon('Back')}
        bg_color="#FFFFFF"
      />

      <div className="container py-[5rem]">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative mx-auto max-w-[600px] overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]"
              data-wow-delay=".15s">
              <div className="py-5">
                <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => handleOpen(1)}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">

                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                CONTACT US
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">

                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="m-4 flex flex-col">
                      <div className="w-full px-2 mb-3">
                        <div>
                          <label
                            htmlFor="message"
                            className="mb-3 block text-lg font-medium text-dark dark:text-white"
                          >
                            How can we help?
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Please leave your question here."
                            className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          ></textarea>
                        </div>
                        <label
                          htmlFor="message"
                          className="mb-3 block text-lg font-medium text-dark dark:text-white"
                        >
                          *Email us for all profile changes.
                        </label>
                      </div>
                      <div className="mb-4 flex justify-center">
                        <button
                          onClick={(e) => { }}
                          type="submit"
                          className="cursor-pointer w-8/12 items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary/90"
                        >
                          Send Message {sendingmessage && <Loader />}
                        </button>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<AccordionLinkIcon linkurl={""} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => { }}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">

                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                PRIVACY POLICY
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">

                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<AccordionLinkIcon linkurl={""} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => { }}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">

                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                TERMS OF SERVICE
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">

                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                  </AccordionBody>
                </Accordion>
              </div>
              <div className="py-10">
                <h4 className="text-center text-primary text-[8px] text-sm lg:text-lg xl:text-2xl 2xl:text-3xl font-medium leading-tight">
                  Frequently asked questions
                </h4>
              </div>
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

              <div>
                <span className="absolute right-1 top-1">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.39737"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 1.39737 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 1.39737 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 13.6943 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 13.6943 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 25.9911 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 25.9911 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 38.288 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 38.288 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 1.39737 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 13.6943 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 25.9911 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 38.288 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 1.39737 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 13.6943 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 25.9911 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 38.288 14.0086)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
                <span className="absolute bottom-1 left-1">
                  <svg
                    width="29"
                    height="40"
                    viewBox="0 0 29 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="2.288"
                      cy="25.9912"
                      r="1.39737"
                      transform="rotate(-90 2.288 25.9912)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 14.5849 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 26.7216 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="13.6944"
                      r="1.39737"
                      transform="rotate(-90 2.288 13.6944)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 14.5849 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 26.7216 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="38.0087"
                      r="1.39737"
                      transform="rotate(-90 2.288 38.0087)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="1.39739"
                      r="1.39737"
                      transform="rotate(-90 2.288 1.39739)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="38.0089"
                      r="1.39737"
                      transform="rotate(-90 14.5849 38.0089)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="38.0089"
                      r="1.39737"
                      transform="rotate(-90 26.7216 38.0089)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 14.5849 1.39761)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 26.7216 1.39761)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help_Center;
