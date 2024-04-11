"use client";
import {
  GlobeAltIcon,
  HomeIcon,
  CakeIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";
import React, { useState } from "react";
import SidebarLinks from "../_components/sidebar-links";
import Image from "next/image";
import { Button } from "@nextui-org/react";
export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div
      className={` z-50 flex  flex-none flex-col w-full ${
        !showMenu ? "h-[6rem] duration-200" : "h-[50rem] duration-200 f"
      }  overflow-hidden xl:w-1/6 xl:h-auto fixed top-0 xl:sticky bg-white `}>
      <div className="flex ">
        <div className=" h-min py-6 px-2 flex items-end justify-center xl:justify-start border-b-1 text-[1.3rem] mx-5 gap-2 text-blue-500 font-semibold  grow xl:grow">
          <div>
            <GlobeAltIcon className="h-12 text-blue-500" />
          </div>
          <div>Product Admin</div>
        </div>
        <div className="xl:hidden flex items-center px-0">
          <Button
            className="bg-transparent"
            onClick={() => {
              setShowMenu(!showMenu);
            }}>
            <Bars3Icon className="h-6" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col  gap-5  text-md py-10 font-bold  flex-1">
        <SidebarLinks
          title="HOME"
          icon={
            <HomeIcon className="h-6 text-gray-300 group-hover:text-blue-500  duration-200" />
          }
          link={"/home"}
        />
        <SidebarLinks
          title="PRODUCTS"
          icon={
            <CakeIcon className="h-6 text-gray-300 group-hover:text-blue-500  duration-200" />
          }
          link={"/product-inventory"}
        />
        {/* <SidebarLinks
          title="ORDERS"
          icon={
            <ShoppingCartIcon className="h-6 text-gray-300 group-hover:text-blue-500  duration-200" />
          }
          link={"/orders"}
        />
        <SidebarLinks
          title="SETTING"
          icon={
            <Cog6ToothIcon className="h-6 text-gray-300 group-hover:text-blue-500  duration-200" />
          }
          link={"/setting"}
        /> */}
      </div>
      <div className="h-[20rem] border-t-1  mx-5  flex items-center justify-center">
        <div className="flex items-center flex-col gap-5">
          <div className="rounded-full w-[5rem] h-[5rem] overflow-hidden">
            <Image
              src="/avatar.jpg"
              className="h-full w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="font-bold">Ruth Chavez</div>
            <div>Product Mangement</div>
          </div>
          <div className="border-2 border-blue-500 rounded-3xl px-6 py-2 flex flex-row items-center justify-center gap-2 text-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer group duration-200">
            <div>Logout</div>
            <ArrowRightIcon className="h-4 text-blue-500 group-hover:text-white  duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
