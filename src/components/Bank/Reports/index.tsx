"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Listbox, ListboxItem, cn, Chip, ScrollShadow } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/_Common/Common Types";
import { Avatar, Typography } from "@material-tailwind/react";
import { Checkbox as RawCheckbox } from "@material-tailwind/react";

import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
const Checkbox: any = RawCheckbox;

const Reports = () => {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  const sendReports = () => {
    // router.push('/add-new-profile3');
  };


  const topContent =
    <ScrollShadow
      hideScrollBar
      className="w-full flex text-primary font-bold py-0.5 px-2 gap-1"
      orientation="horizontal"
    >

    </ScrollShadow>

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Reports"
        left_link_name={'Back'}
        left_link_url={'/bank/banklist'}
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
                    <div className="w-full flex justify-center">
                      <div className="w-10/12 border-2 border-gray-400 rounded-md">
                        <div id="contacts">
                          <div className="flex gap-2 justify-between items-center">
                            <div className="flex flex-col w-full px-2">
                              <span className="text-small">Report - Boosters</span>
                            </div>
                            <div className="flex flex-col w-full px-2 items-end">
                              <span className="text-small w-1/2"></span>
                            </div>
                            <Checkbox id="check" color="blue" defaultChecked={false} label="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={sendReports}
                        className="text-white rounded-md w-8/12"
                      >
                        Continue {sending && <Loader />}
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

export default Reports;
