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
import CommonIcons from "@/components/_Common/CommonIcons";
import { Checkbox as RawCheckbox } from "@material-tailwind/react";
import getCommonIcons from '@/components/_Common/CommonIcons';
const Checkbox: any = RawCheckbox;

const Add_New_Profile2 = () => {
  const [saving, setSaving] = useState(false);
  const [isUploadedImage, setUploadedImage] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/add-new-profile3');
  };


  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Student / Member"
        left_link_name={'Back'}
        left_link_url='/add-new-profile/add-new-profile1'
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
                  <div className="flex flex-row mb-5 items-center">
                    <div className="basis-1/12">
                      {getCommonIcons('Warning', '30', '30')}
                    </div>
                    <div className="basis-11/12 text-primary text-left text-base">
                      Please enter your information below.
                    </div>
                  </div>

                  <div className="w-full relative px-2">
                    <div className="mb-14 flex flex-col items-center justify-center">
                      <label
                        htmlFor="name"
                        className='w-full text-left text-black mb-3 block text-sm font-medium'
                      >
                        Picture or Avatar*
                      </label>
                      <div className="w-1/2">
                        <div className="relative bg-primary/10 rounded-full overflow-hidden aspect-square items-center justify-center">
                          <div className=" opacity-65">
                            {isUploadedImage ?
                              (<div>
                                <Image src="" alt="campaign image" fill />
                              </div>) :
                              (<div>
                              </div>)}
                          </div>
                          <div className="z-20 absolute right-0 top-0 flex h-full w-full items-center justify-center">
                            <div className="flex flex-row gap-x-10">
                              <button aria-label="image upload button"
                                onClick={() => { }}
                                className="z-10 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                                {getCommonIcons('ImageUpload', '50', '50')}
                              </button>
                            </div>
                            <div className="absolute left-0 bottom-0 w-full h-40 inline-flex items-center justify-stretch bg-gradient-to-t from-dark/20 to-white/0 px-4 py-2 capitalize" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <NormalInput id="firstname" name="First Name(Student / Member)*" placeholder="Enter your first name" name_color="black" />
                    <NormalInput id="lastname" name="Last Name(Student / Member)*" placeholder="Enter your Lalst name" name_color="black" />
                    <NormalDateInput id="birthday" name="Birth Date*" defaultDate={""} placeholder={""} />
                    <NormalInput id="streetaddress" name="Address*" placeholder="Street address" name_color="black" />
                    <NormalInput id="city" name="" placeholder="City" name_color="black" />
                    <NormalInput id="state-zip" name="" placeholder="State, Zip" name_color="black" />
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

export default Add_New_Profile2;
