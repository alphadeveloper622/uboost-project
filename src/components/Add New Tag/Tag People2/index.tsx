"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/_Common/Common Types";

import Loader from "@/components/_Common/Loader";
import NormalInput from "@/components/_Common/NormalInput";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import { Checkbox as RawCheckbox } from "@material-tailwind/react";
import getCommonIcons from '@/components/_Common/CommonIcons';

const Tag_People2 = () => {
  const [adding, setAdding] = useState(false);
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/add-new-tag/review-and-send');
  };


  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Tag Your Contacts"
        left_link_name={'Back'}
        left_link_url={'/add-new-tag/create-a-message'}
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
                      Enter Contacts
                    </div>
                  </div>

                  <div className="w-full relative px-2">
                    <NormalInput id="name" name="Name" placeholder="Enter name" namecolor="black" />
                    <NormalInput id="phone" name="Phone Number" placeholder="Enter phone number" namecolor="black" />
                    <div className="mb-4 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue}
                        className="text-white rounded-md w-8/12"
                      >
                        Add {adding && <Loader />}
                      </Button>
                    </div>
                    <ListboxWrapper id="contacts" width={'full'} >
                      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                        <ListboxItem
                          key="new"
                          startContent={getCommonIcons('Delete', '30', '30')}
                          className="text-left border-2 px-2"
                        >
                          <div className="flex gap-2 justify-start items-center">
                            <div className="flex flex-row w-full px-2">
                              <span className="text-small w-1/2">Farell Duclair</span>
                              <span className="text-tiny w-1/2 text-default-400">8322537756</span>
                            </div>
                          </div>
                        </ListboxItem>

                      </Listbox>
                      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                        <ListboxItem
                          key="new"
                          startContent={getCommonIcons('Delete', '30', '30')}
                          className="text-left border-2 px-2"
                        >
                          <div className="flex gap-2 justify-start items-center">
                            <div className="flex flex-row w-full px-2">
                              <span className="text-small w-1/2">Farell Duclair</span>
                              <span className="text-tiny w-1/2 text-default-400">8322537756</span>
                            </div>
                          </div>
                        </ListboxItem>

                      </Listbox>
                    </ListboxWrapper>
                    <div className="my-4 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue}
                        className="text-white rounded-md w-8/12"
                      >
                        Next {sending && <Loader />}
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

export default Tag_People2;
