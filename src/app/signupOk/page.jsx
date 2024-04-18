"use client";
import React from "react";
import { Boxes } from "@/components/bg";
import { useRouter } from "next/navigation";
const SignupOk = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 5000);
  }, []);

  return (
    <div className="flex relative fadeIn h-screen justify-center items-center overflow-hidden w-screen">
      <Boxes className="h-full -z-10" />
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl mb-5">
          Your Account has been created successfully. Please Login to continue.
        </div>
        <div className="text-lg">
          This page will redirect to login page shortly. If it doesn't, click{" "}
          <a href="/login">here</a>
        </div>
      </div>
    </div>
  );
};

export default SignupOk;
