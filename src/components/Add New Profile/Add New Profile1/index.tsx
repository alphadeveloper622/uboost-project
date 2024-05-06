"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

import Loader from "@/components/_Common/Loader";
import NormalInput from "@/components/_Common/NormalInput";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import NormalDateInput from '@/components/_Common/NormalDateInput'
import { Checkbox as RawCheckbox } from "@material-tailwind/react";
import getCommonIcons from "@/components/_Common/CommonIcons";
const Checkbox: any = RawCheckbox;

const Add_New_Profile1 = () => {
  const [saving, setSaving] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook

  const handleContinue = () => {
    // You can add any other logic you need here before navigating
    router.push('/add-new-profile2'); // Navigate to the 'add-new-profile1' page
  };


  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Parent / Guardian Consent"
        description={""}
        description_link=""
        left_link={getNormalLinkIcon('Back', '/age-verification')}
        right_link={getNormalLinkIcon('', '')}
        bg_color="#FFFFFF"
      />
      <div className="bg-[#F4F7FF] py-14 dark:bg-dark lg:py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto max-w-[600px] overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]"
                data-wow-delay=".15s"
              >
                <div>
                  <div className="flex flex-row mb-5  items-center">
                    <div className="basis-1/12">
                      {getCommonIcons('Warning', 30, 30)}
                    </div>
                    <div className="basis-11/12 text-primary text-left text-base">
                      Parent or guardian information is needed if the student/member is under 13.
                    </div>
                  </div>

                  <div className="w-full px-2">
                    <NormalInput id="pgname" name="Parent/Guardian full name*" placeholder="Enter your full name" namecolor="black" />
                    <NormalDateInput id="birthday" name="Birth Date*" defaultDate={""} placeholder={""} />
                    <NormalInput id="cellnumber" name="Cell number*" placeholder="Enter your cell number" namecolor="black" />
                    <NormalInput id="email" name="Email*" placeholder="Enter your email" namecolor="black" />
                    <div id="" className='px-2 mb-8 justify-center w-full'>
                      <label
                        htmlFor="name"
                        className='mb-3 block text-sm font-medium text-black text-left'
                      >
                        I have read and accept üboost App Terms and Conditions, and its Privacy Policy.*
                      </label>
                      <div className='flex flex-row justify-center border-stroke w-full rounded-sm border bg-ugary px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none'>
                        <Checkbox id="tos" color="blue" defaultChecked={false} label="Terms of Service*" />
                        <Checkbox id="pp" color="blue" defaultChecked={false} label="Privacy Policy*" />
                      </div>
                    </div>
                    <div id="" className='px-2 mb-8 justify-center w-full'>
                      <label
                        htmlFor="name"
                        className='mb-3 block text-sm font-medium text-black text-left'
                      >
                        I am the legal Parent or Guardian of the Student/Member. I permit my child to sign up on the üboost App.*
                      </label>
                      <div className='flex flex-row justify-center border-stroke w-full rounded-sm border bg-ugary px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none'>
                        <Checkbox color="blue" defaultChecked={false} label="I consent*" />
                      </div>
                    </div>
                    <div className="mb-9 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue} // Updated to use handleContinue function
                        className="text-white rounded-md w-8/12"
                      >
                        Continue {saving && <Loader />}
                      </Button>
                    </div>
                  </div>
                </div>

                <NormalFormDecoration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Add_New_Profile1;
