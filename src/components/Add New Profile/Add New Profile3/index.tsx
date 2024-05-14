"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

import Loader from "@/components/_Common/Loader";
import NormalInput from "@/components/_Common/NormalInput";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import { Checkbox as RawCheckbox } from "@material-tailwind/react";
import NormalDropdownInput from "@/components/_Common/NormalDropdownInput";
const Checkbox: any = RawCheckbox;

const organization_options = ["organization1", "organization2", "organization3", "organization4"];


const Add_New_Profile3 = () => {
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/fundraising-dashboard');
  };


  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Parent / Guardian Consent"
        left_link_name={'Back'}
        left_link_url={'/add-new-profile/add-new-profile2'}
        left_link_icon={getNormalLinkIcon('Back')}
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
                  <div className="w-full px-2">
                    <NormalDropdownInput id="organization" name="Organization or School*" placeholder="Select an option" options={organization_options} />
                    <NormalInput id="cellnumber" name="Cell number*" placeholder="Cell number" name_color="black" />
                    <NormalInput id="email" name="Email*" placeholder="Email" name_color="black" />
                    <NormalInput id="password" name="Password*" placeholder="Password" name_color="black" />
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
                    <div className="mb-9 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue}
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

export default Add_New_Profile3;
