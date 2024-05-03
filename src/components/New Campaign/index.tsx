"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Loader from "@/components/_Common/Loader";
import getCampaignIcon from "@/components/_Common/CampaignCategoryIcon";

const New_Campaign = () => {
  const [adding, setAdding] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isUploadedImage, setUploadedImage] = useState(false);
  const [isUploadedVideo, setUploadedVideo] = useState(false);
  return (
    <section>
      <div className="bg-gray-50 dark:bg-dark relative z-10 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px]">
        <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
        <div className="container w-full flex-col flex-wrap items-center">
          <div className="flex flex-row flex-wrap items-center">
            <div className="flex flex-row w-full items-center justify-center">
              <div className="scale-100 hover:scale-105 duration-150">
                <Link href="/fundraising-dashboard">
                  <svg
                    fill="#3758f9"
                    width="46"
                    height="46"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330" xmlSpace="preserve">
                    <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	                          c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	                          c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	                          c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
                  </svg>
                </Link>
              </div>

              <div className="text-center flex-grow">
                <p className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  True love that allows hope to bloom awaits.
                </p>
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
            <p className="text-center text-primary text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
              Receive love from all over the world.
            </p>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 relative flex flex-row sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-12 sm:px-20 md:px-24 lg:px-28 lx:px-32 2xl:px-36 3xl:px-40 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
          <div>
            {isOpen ? (
              <video className="h-full w-full" controls autoPlay onEnded={() => setOpen(false)}>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative bg-primary/40 aspect-[16/9] items-center justify-center">
                <div className=" opacity-65">
                  {isUploadedImage ?
                    (<div>
                      <Image src="" alt="campaign image" fill />
                    </div>) :
                    (<div>

                    </div>)}
                </div>
                <div className="z-20 absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  {isUploadedImage ?
                    (<div>
                      <button aria-label="video play button"
                        onClick={() => { }}
                        className="z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          className="fill-current"
                        >
                          <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                        </svg>
                      </button>
                    </div>
                    ) :
                    (<div className="flex flex-row gap-x-10">
                      <button aria-label="image upload button"
                        onClick={() => { }}
                        className="z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          fill="#3758f9"
                          width="50"
                          height="50"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve">
                          <path d="M25.3713074,53.1918335c0.7995605-0.9587402,2.2723389-0.9587402,3.0718994,0l7.8917236,9.4628296  c0.7995605,0.9587402,2.2723389,0.9587402,3.0718994,0l16.7849121-20.1260986c0.7995605-0.9587402,2.2723389-0.9587402,3.0718994,0  l7.7616577,9.3067627c2.3706665-0.8513184,4.9230347-1.3182983,7.5830688-1.3182983  c0.8453369,0,1.6786499,0.0509644,2.500061,0.1422119V13.9829712c0-2.4814453-2.0185547-4.5-4.5-4.5H12.3916321  c-2.4814453,0-4.5,2.0185547-4.5,4.5v57.0336914c0,2.4814453,2.0185547,4.5,4.5,4.5h39.8589478  c-0.0912476-0.821228-0.1422119-1.65448-0.1422119-2.4996338c0-0.8453979,0.0510254-1.678894,0.1422729-2.5003662H12.8916321  v-2.3607788L25.3713074,53.1918335z M28.3887634,22.3933716c4.2026367,0,7.6095581,3.4069214,7.6095581,7.6096191  c0,4.2026367-3.4069214,7.6095581-7.6095581,7.6095581c-4.2026978,0-7.6096191-3.4069214-7.6096191-7.6095581  C20.7791443,25.800293,24.1860657,22.3933716,28.3887634,22.3933716z M74.6083679,55.5170288c-9.664978,0-17.5,7.835022-17.5,17.5  c0,9.6650391,7.835022,17.5,17.5,17.5s17.5-7.8349609,17.5-17.5C92.1083679,63.3520508,84.2733459,55.5170288,74.6083679,55.5170288  z M83.3681946,72.3145142c-0.4912109,0.5117188-1.1474609,0.7695313-1.8046875,0.7695313  c-0.6220703,0-1.2451172-0.2304688-1.7304688-0.6953125l-2.7246094-2.6120605v1.2399902v11.1005859  c0,1.3808594-1.1191406,2.5-2.5,2.5s-2.5-1.1191406-2.5-2.5V70.5166626v-0.7399902l-2.7246094,2.6120605  c-0.9990234,0.9550781-2.5791016,0.9208984-3.5351563-0.0742188c-0.9550781-0.9970703-0.921875-2.5800781,0.0742188-3.5351563  l6.9550781-6.6669922c0.96875-0.9277344,2.4921875-0.9277344,3.4609375,0l6.9550781,6.6669922  C84.2900696,69.734436,84.3232727,71.3174438,83.3681946,72.3145142z" />
                        </svg>
                      </button>
                      <button aria-label="video upload button"
                        onClick={() => { }}
                        className="z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="50"
                          height="50"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve">
                          <g transform="translate(0,-952.36218)">
                            <path
                              d="m 14,965.36218 c -2.21601,0 -4.0000001,1.784 -4.0000001,4 l 0,8 8.0937501,0 10.34375,-12 -14.4375,0 z m 19.6875,0 -10.34375,12 14.75,0 10.34375,-12 -14.75,0 z m 20,0 -10.34375,12 14.75,0 10.34375,-12 -14.75,0 z m 20,0 -10.34375,12 16.65625,0 0,-8 c 0,-2.216 -1.78399,-4 -4,-4 l -2.3125,0 z m -63.6875002,16 0,44.00002 c 0,2.216 1.7839902,4 4.0000002,4 l 46.53125,0 c -0.33191,-1.2836 -0.53125,-2.6126 -0.53125,-4 0,-8.8366 7.16343,-16 16,-16 1.38738,0 2.71636,0.1994 4,0.5312 l 0,-28.53122 -70.0000001,0 z m 30.0000002,14 16,10.00002 -16,10 0,-20.00002 z m 36,16.00002 c -7.73199,0 -14,6.268 -14,14 0,7.732 6.26801,14 14,14 7.73198,0 14,-6.268 14,-14 0,-7.732 -6.26802,-14 -14,-14 z m 0,5 c 0.57711,0 1.07243,0.2653 1.4375,0.6562 1.66486,1.4837 3.30646,3.3365 4.96875,4.9376 0.80455,0.8043 0.78114,2.0314 0,2.8124 -0.78114,0.7812 -2.03138,0.7812 -2.8125,0 L 78,1023.1747 l 0,9.1875 c 0,1.1046 -0.8953,2 -2,2 -1.1047,0 -2,-0.8954 -2,-2 l 0,-9.1875 -1.59375,1.5937 c -0.78112,0.7812 -2.03136,0.7812 -2.8125,0 -0.78114,-0.781 -0.79674,-2.0081 0,-2.8124 1.62691,-1.6371 3.33311,-3.4238 4.96875,-4.9376 0.36508,-0.3909 0.86039,-0.6562 1.4375,-0.6562 z"
                              fill="#3758f9"
                              stroke="none"
                              visibility="visible"
                              display="inline"
                              overflow="visible"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>)}

                </div>
                <div className="absolute left-0 bottom-0 w-full h-40 inline-flex items-center justify-stretch bg-gradient-to-t from-dark/60 to-white/0 px-4 py-2 capitalize" />
              </div>
            )}
          </div>
        </div>
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

export default New_Campaign;
