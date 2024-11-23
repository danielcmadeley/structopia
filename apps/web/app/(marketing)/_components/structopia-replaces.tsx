"use client";

import Image from "next/image";

export default function StructopiaReplaces() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-stone-50 uppercase p-8">
          Structopia replaces
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-5 items-center  w-full  p-6">
          <div className="col-span-1"></div>
          <img
            src="https://ik.imagekit.io/danielcmadeley/structopia/trello-logo.svg?updatedAt=1732376347819"
            alt=""
            width={100}
            height={35}
            className="h-[35px] w-auto col-span-1"
          />
          <div className="col-span-1"></div>
          <img
            src="https://ik.imagekit.io/danielcmadeley/structopia/steelbeam-calculator.svg?updatedAt=1732376347215"
            alt=""
            width={100}
            height={35}
            className="h-[35px] w-auto col-span-1"
          />
        </div>
        <div className="col-span-1"></div>
        <div className="grid grid-cols-5 items-center justify-around w-full p-6">
          <img
            src="https://ik.imagekit.io/danielcmadeley/structopia/skyciv-logo.svg?updatedAt=1732376347230"
            alt=""
            width={100}
            height={35}
            className="h-[35px] w-auto col-span-1"
          />
          <div className="col-span-1"></div>
          <img
            src="https://ik.imagekit.io/danielcmadeley/structopia/asite-logo.svg?updatedAt=1732376347263"
            alt=""
            width={100}
            height={35}
            className="h-[35px] w-auto col-span-1"
          />
          <div className="col-span-1"></div>
          <img
            src="https://ik.imagekit.io/danielcmadeley/structopia/asana-logo.svg?updatedAt=1732376346878"
            alt=""
            width={100}
            height={35}
            className="h-[35px] w-auto col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
