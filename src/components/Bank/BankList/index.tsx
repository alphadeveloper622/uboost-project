"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Listbox, ListboxItem, cn, Chip, ScrollShadow } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/_Common/Common Types";
import { Avatar, Typography } from "@material-tailwind/react";

import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'


const BankList = () => {
  const router = useRouter();

  const navigateReports = () => {
    router.push('/bank/reports');
  };

  const navigateCashOut = () => {
    router.push('/bank/cashout');
  };

  const topContent =
    <ScrollShadow
      hideScrollBar
      className="w-full flex text-primary font-bold py-0.5 px-2 gap-1"
      orientation="horizontal"
    >
      Recent transactions
    </ScrollShadow>

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Tag Your Contacts"
        left_link_name={'Back'}
        left_link_url={'/campaign-detail'}
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
                  <div className="w-full relative px-2">
                    <div className="flex justify-center items-center py-5">
                      <div className="flex items-center gap-4">
                        <Avatar
                          src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="avatar"
                          size='xxl'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        />
                        <div className='flex flex-col items-start justify-start'>
                          <div className="text-gray-600 text-left text-sm font-medium">
                            Organization / Member
                          </div>
                          <div className="text-black text-left text-base font-bold">
                            Denton Tennis
                          </div>
                          <div className="text-gray-600 text-left text-sm font-medium">
                            Fundraiser
                          </div>
                          <div className="text-black text-left text-base font-bold">
                            2024-25 TRex
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-10 relative flex flex-col justify-around items-center">
                      <div className="py-4 gap-4 flex flex-col items-start">
                        <div className="text-primary text-left text-lg font-medium">
                          TOTAL RAISED
                        </div>
                        <div className="text-black text-left text-3xl font-bold">
                          &#36;15525.00
                        </div>
                      </div>
                      <div className="py-4 gap-4 flex flex-col items-start">
                        <div className="text-primary text-left text-lg font-medium">
                          TOTAL AVAILABLE
                        </div>
                        <div className="text-black text-left text-3xl font-bold">
                          &#36;11234.56
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex justify-around">
                    <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={navigateReports}
                        className="text-white rounded-md w-4/12"
                      >
                        Reports
                      </Button>
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={navigateCashOut}
                        className="text-white rounded-md w-4/12"
                      >
                        Cash Out
                      </Button>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-10/12 border-2 border-gray-400 rounded-md">
                        <ListboxWrapper id="contacts" width='full' >
                          <Listbox variant="flat" aria-label="Listbox menu with descriptions" topContent={topContent}>
                            <ListboxItem
                              key="new"
                              startContent={<Avatar
                                src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="avatar"
                                size='md'
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                              />}
                              className="text-left border-2 px-2"
                            >
                              <div className="flex gap-2 justify-between items-center">
                                <div className="flex flex-col w-full px-2">
                                  <span className="text-small w-1/2">Oliva Duclair</span>
                                  <span className="text-tiny w-1/2 text-default-400">Andy Bernard</span>
                                </div>
                                <div className="flex flex-col w-full px-2 items-end">
                                  <span className="text-small w-1/2">&#36;50.00</span>
                                  <span className="text-tiny w-1/2 text-default-400">4/5/2024</span>
                                </div>
                              </div>
                            </ListboxItem>
                            <ListboxItem
                              key="new"
                              startContent={<Avatar
                                src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="avatar"
                                size='md'
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                              />}
                              className="text-left border-2 px-2"
                            >
                              <div className="flex gap-2 justify-between items-center">
                                <div className="flex flex-col w-full px-2">
                                  <span className="text-small w-1/2">Oliva Duclair</span>
                                  <span className="text-tiny w-1/2 text-default-400">Andy Bernard</span>
                                </div>
                                <div className="flex flex-col w-full px-2 items-end">
                                  <span className="text-small w-1/2">&#36;50.00</span>
                                  <span className="text-tiny w-1/2 text-default-400">4/5/2024</span>
                                </div>
                              </div>
                            </ListboxItem>
                            <ListboxItem
                              key="new"
                              startContent={<Avatar
                                src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="avatar"
                                size='md'
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                              />}
                              className="text-left border-2 px-2"
                            >
                              <div className="flex gap-2 justify-between items-center">
                                <div className="flex flex-col w-full px-2">
                                  <span className="text-small w-1/2">Oliva Duclair</span>
                                  <span className="text-tiny w-1/2 text-default-400">Andy Bernard</span>
                                </div>
                                <div className="flex flex-col w-full px-2 items-end">
                                  <span className="text-small w-1/2">&#36;50.00</span>
                                  <span className="text-tiny w-1/2 text-default-400">4/5/2024</span>
                                </div>
                              </div>
                            </ListboxItem>

                          </Listbox>
                        </ListboxWrapper>
                      </div>
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

export default BankList;
