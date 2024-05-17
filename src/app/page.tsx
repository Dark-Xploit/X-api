"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Table from "../components/table";
import { api, services } from "../utils/constants";

function Home() {
  const [showmenu, setShowmenu] = useState(false);
  const [selectedApi, setSelectedApi] = useState("");

  const handleShowMenu = () => {
    setShowmenu(!showmenu);
  };
  const handleSetApi = (key: string) => {
    setSelectedApi(key);
    setShowmenu(false);
  };

  return (
    <>
      <div className="flex flex-col relative bg-gradient-to-br from-[#222831] to-[#393E46] items-center fadeIn h-screen  overflow-hidden w-screen">
        <div className="flex w-full top-0 text-xl gap justify-between h-max shadow-lg rounded-b-lg shadow-red- items-center p-3 backdrop-blur-sm bg-[#39414d]">
          <div className="cursor-pointer">
            <IoMenu onClick={handleShowMenu} />
          </div>
          <div className=" text-neutral-300 shadow-sm text-2xl md:text-5xl lg:text-5xl px-3 py-2 ">
            X-Api
          </div>
          <div className="cursor-pointer">Profile</div>
        </div>
        <div className="flex w-full h-full">
          {showmenu && (
            <div
              id="menu"
              className="backdrop-blur-sm w-2/12 h-full absolute mt-2 rounded slideinlr shadow-lg  transition-all duration-100 ease-in-out"
            >
              <div className="backdrop-blur-sm left-0 h-full flex pt-5  flex-col items-center rounded-lg gap-3 w-full ">
                {api.map(
                  (item: { key: string; name: string }) =>
                    services[item.key] && (
                      <button
                        onClick={() => handleSetApi(item.key)}
                        key={item.key}
                        className="p-2 rounded-lg  bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[90%] transition duration-200 hover:scale-105 cursor-pointer"
                      >
                        {item.name}
                      </button>
                    )
                )}
              </div>
            </div>
          )}

          {!selectedApi ? (
            <div className="flex flex-col w-full items-center justify-center">
              <div className="text-4xl text-neutral-300 ">Welcome to X-Api</div>
              <div className="text-2xl text-neutral-300 ">
                Choose an API to get started
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full h-full  ">
              <div className="text-4xl  text-neutral-300  mt-10">
                Available {selectedApi} API
              </div>
              <div className="w-10/12 h-full my-3">
                <Table selectedApi={selectedApi} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
