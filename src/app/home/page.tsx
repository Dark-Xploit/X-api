"use client";
import React, { useEffect, useState } from "react";
import { Boxes } from "@/components/bg";
import { useRouter } from "next/navigation";

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      setIsLogin(true);
    } else {
      router.push("/");
    }
  }, []);
  return (
    <>
      {isLogin ? (
        <div className="flex flex-col relative items-center fadeIn h-screen balsa overflow-hidden w-screen">
          <Boxes className="h-full -z-10" />
          <div className="flex w-full top-0 text-xl gap justify-between h-max shadow-lg rounded-b-lg shadow-neutral-800 items-center p-3 backdrop-blur-sm">
            <div className="font-bungee text-neutral-300 shadow-sm text-5xl px-3 py-2 ">
              X-Api
            </div>
            <div>Profile</div>
          </div>

          <div className="w-[99%] left-0 flex flex-col h-full m-5">
            <div className="backdrop-blur-sm left-0 h-full flex pt-5 flex-col items-center rounded-lg gap-3 w-2/12 ">
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Image
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Text
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Audio
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Video
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Anime
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Movie
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Manga
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                News
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Database
              </div>
              <div className="p-2 rounded-lg lefthover bg-neutral-200 bg-opacity-20 backdrop-blur-sm w-[96%] ">
                Email
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <div className="dot-typing"></div>
        </div>
      )}
    </>
  );
}

export default Home;
