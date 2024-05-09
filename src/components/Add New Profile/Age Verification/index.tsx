"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import Loader from "@/components/_Common/Loader";
import CalendarIcon from '@/components/_Common/CalendarIcon';
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import NormalDateInput from "@/components/_Common/NormalDateInput";


const Age_Verification = () => {
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/add-new-profile1');
  };

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle 
        id="top title" 
        title="Age Verification"
        left_link_name={'Back'}
        left_link_url={'/add-new-profile/membership-options'}
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
                  <h2 className="mb-3 pb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Input your D.O.B.
                  </h2>
                  <div className="w-full px-2">
                  <NormalDateInput id="birthday" name="" defaultDate={""} placeholder={""} />
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
                    <p className="text-center leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                      Alreay have an account? <Link href="/signin" className="text-primary underline">Log in</Link>
                    </p>
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

export default Age_Verification;
