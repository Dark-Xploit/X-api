"use client";
import React, { useState } from "react";
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
      <div className="flex flex-col relative  bg-[#222831]  items-center fadeIn mb-5 justify-center chakra-petch-semibold-italic ">
        <div className="flex w-full top-0 text-xl    h-max shadow-lg rounded-b-lg shadow-red- items-center p-1 backdrop-blur-sm ">
          <div className="cursor-pointer pl-5">
            <IoMenu className="text-neutral-300" onClick={handleShowMenu} />
          </div>
          <div
            onClick={() => setSelectedApi("")}
            className=" text-neutral-300 w-full text-center shadow-sm text-2xl md:text-5xl lg:text-5xl px-3 py-2 "
          >
            X-API
          </div>
        </div>
        <div className="flex w-full h-full">
          {showmenu && (
            <div
              id="menu"
              className="backdrop-blur-sm  h-full absolute mt-2 rounded slideinlr shadow-lg  transition-all duration-100 ease-in-out"
            >
              <div className="backdrop-blur-sm left-0 h-full flex pt-5  flex-col  rounded-lg gap-3 w-max mx-2  ">
                {api.map(
                  (item: { key: string; name: string }) =>
                    services[item.key] && (
                      <button
                        onClick={() => handleSetApi(item.key)}
                        key={item.key}
                        className="px-4 hover:bg-opacity-30 py-2 rounded-lg text-neutral-300   bg-neutral-200 bg-opacity-20 backdrop-blur-sm  transition duration-200 hover:scale-105 cursor-pointer"
                      >
                        {item.name}
                      </button>
                    )
                )}
              </div>
            </div>
          )}

          {!selectedApi ? (
            <div className="flex flex-col w-full h-[50vh] items-center justify-end">
              <div className="text-4xl text-neutral-300 ">Welcome to X-Api</div>
              <div className=" text-neutral-300 ">
                Choose an API to get started
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full h-full  ">
              <div className="text-lg md:text-xl lg:text-2xl text-neutral-300  mt-10">
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
