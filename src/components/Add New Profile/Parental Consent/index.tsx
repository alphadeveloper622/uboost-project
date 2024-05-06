"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";

const Parental_Consent = () => {
  const [adding, setAdding] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isUploadedImage, setUploadedImage] = useState(false);
  const [isUploadedVideo, setUploadedVideo] = useState(false);
  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Add New Profile1"
        description={""}
        description_link=""
        left_link={getNormalLinkIcon('Back', '/Parental Consent')}
        right_link={getNormalLinkIcon('', '')}
        bg_color="#FFFFFF"
      />
      <div className="bg-gray-100 relative flex justify-center sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-12 sm:px-20 md:px-24 lg:px-28 lx:px-32 2xl:px-36 3xl:px-40 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full px-4">
              <div
                className="rounded-sm bg-white px-2 shadow-three dark:bg-gray-dark lg:mb-5 lg:px-4 p-10"
                data-wow-delay=".15s
              "
              >
                <form>
                  <div className="m-4 flex flex-col">
                    <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                      New Campaign
                    </h2>
                    <div className="w-full px-2 justify-center">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter campaign name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Category
                        </label>
                        <select className="select border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none">
                          <option disabled selected>What Categroy?</option>
                          <option id="Sports">Sports</option>
                          <option id="Medical">Medical</option>
                          <option id="Legal">Legal</option>
                          <option id="Finance">Finance</option>
                          <option id="Education">Education</option>
                          <option id="Environment">Environment</option>
                          <option id="Science">Science</option>
                          <option id="Technology">Technology</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-2">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Description
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter description"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-9 flex justify-center">
                      <button
                        onClick={(e) => { }}
                        type="submit"
                        className="cursor-pointer w-8/12 items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary/90"
                      >
                        Save {adding && <Loader />}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Parental_Consent;
