"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import { Button } from "@nextui-org/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NoramlFormDecoration from "../_Common/NormalFormDecoration";
import NormalTextInputBox from "../_Common/NormalTextInputBox";

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
  const [open, setOpen] = useState(0);
  const [sendingmessage, setSendingMessage] = useState(false);
  const [sendingcode, setSendingCode] = useState(false);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Settings"
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
                        <NormalTextInputBox id="message" name="" placeholder="Please leave your question here." row={6} />
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
              <NoramlFormDecoration/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
