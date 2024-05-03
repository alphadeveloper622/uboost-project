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

const Settings = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const [sendingmessage, setSendingMessage] = useState(false);
  const [sendingcode, setSendingCode] = useState(false);
  
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-[#F4F7FF]">
      <div className="bg-gray-50 dark:bg-dark relative z-10 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px]">
        <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
        <div className="container w-full flex-col flex-wrap items-center">
          <div className="flex flex-row flex-wrap items-center">
            <div className="flex flex-row w-full items-center justify-center">
              <div className="scale-100 hover:scale-105 duration-150">
                <Link href="/fundraising-dashboard">
                  <svg fill="#3758f9" width="46" height="46" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330" xmlSpace="preserve">
                    <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	                          c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	                          c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	                          c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
                  </svg>
                </Link>
              </div>

              <div className="text-center flex-grow">
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Settings
                </h1>
              </div>

              <div className="scale-100 hover:scale-105 duration-150">
                <Link href="">
                  <svg width="45"
                    height="45"
                    viewBox="0 0 496.158 496.158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {/* <circle style={{ fill: "#3758f9" }} cx="242.4" cy="242.4" r="242.4" />
                    <path style={{ fill: "#3758f9" }} d="M0,242.4C0,376,108,484,242.4,484C376,484,484,376,484,242.4" />
                    <polygon style={{ fill: "#ffffff" }} points="394.4,202.4 282.4,202.4 282.4,90.4 202.4,90.4 202.4,202.4 90.4,202.4 90.4,282.4 
	                        202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 "/>
                    <polygon style={{ fill: "#ffffff" }} points="282.4,200.8 200.8,282.4 202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 
	                        394.4,202.4 282.4,202.4 "/> */}
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-body-color dark:text-dark-6 mb-5 text-base">
            <h4 className="text-center text-primary text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">

            </h4>
          </p>
        </div>
      </div>

      <div className="container py-[5rem]">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative mx-auto max-w-[600px] overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]"
              data-wow-delay=".15s">
              <div className="flex justify-center items-center py-5">
                <div className="flex items-center gap-4">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="avatar" variant="rounded"
                    placeholder={undefined} // Assuming placeholder can be undefined
                    onPointerEnterCapture={undefined} // Assuming event handlers can be undefined
                    onPointerLeaveCapture={undefined} // Assuming event handlers can be undefined
                  />
                  <div>
                    <Typography as="h6" variant="h6" {...({} as any)}>Tania Andrew</Typography>
                    <Typography as="p" variant="small" color="gray" className="font-normal" {...({} as any)}>
                      member
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => handleOpen(1)}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                          <g style={{ fill: "#3758f9" }}>
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                Account
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                                Change Personal Information
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="m-4 flex flex-col">
                      <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                        Have a question?
                      </h2>
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
                <Accordion open={open === 2} icon={<AccordionIcon id={2} open={open} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => handleOpen(2)}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">
                        <svg width="40px" height="35px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                          <g style={{ fill: "#3758f9" }}>
                            <path d="M389.565,244.87h-267.13c-27.619,0-50.087,22.468-50.087,50.087v166.956c0,27.619,22.468,50.087,50.087,50.087h267.13
			                    c27.619,0,50.087-22.468,50.087-50.087V294.957C439.652,267.337,417.184,244.87,389.565,244.87z M272.696,373.394v54.731
			                    c0,9.223-7.479,16.696-16.696,16.696s-16.696-7.473-16.696-16.696v-54.731c-9.932-5.792-16.696-16.443-16.696-28.748
			                    c0-18.413,14.978-33.391,33.391-33.391s33.391,14.978,33.391,33.391C289.391,356.951,282.627,367.602,272.696,373.394z"/>
                            <path d="M261.565,0c-82.858,0-150.261,67.408-150.261,150.261v61.217h83.478v-61.217c0-36.826,29.956-66.783,66.783-66.783
			                    c36.826,0,66.783,29.956,66.783,66.783v61.217h83.478v-61.217C411.826,67.408,344.424,0,261.565,0z"/>
                          </g>
                        </svg>
                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                Security
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                                Change Password
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="m-4 flex flex-col">
                      <div className="w-full px-2 justify-center">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Email"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="mb-9 flex justify-center">
                        <button
                          onClick={(e) => { }}
                          type="submit"
                          className="cursor-pointer w-8/12 items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary/90"
                        >
                          Send code {sendingcode && <Loader />}
                        </button>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<AccordionLinkIcon linkurl={"/help-center"} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => { }}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17H12.01M12 14C12.8906 12.0938 15 12.2344 15 10C15 8.5 14 7 12 7C10.4521 7 9.50325 7.89844 9.15332 9M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#3758f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                Help
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                                Help center, contact us, privacy policy
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
                <Accordion open={open === 4} icon={<AccordionLinkIcon linkurl={"/signin"} />}
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => { }}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="relative h-16 flex flex-row">
                      <div className="basis-[2/8] flex justify-center items-center ">
                        <svg width="37px" height="37px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path style={{ fill: "#3758f9" }} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-[6/8] px-5 flex-grow">
                        <div className="flex w-full h-full items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                                Logout
                              </p>
                            </div>
                            <div className="flex w-full justify-start">
                              <p className="text-left leading-normal text-gray-500 text-sm lg:text-md xl:text-lg 2xl:text-xl font-medium">
                                See you soon
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

export default Settings;
