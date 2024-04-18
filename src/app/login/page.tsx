"use client";
import React, { useState } from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { cn } from "@/utils/cn";
import CryptoJS from "crypto-js";
import { Boxes } from "@/components/bg";
import axios from "axios";
import { useRouter } from "next/navigation";
function SignupFormDemo() {
  function encrypt(data: JSON) {
    // Convert the data to a string
    const dataString = JSON.stringify(data);
    // Encrypt the data using AES encryption
    const ciphertext = CryptoJS.AES.encrypt(
      dataString,
      "zNj2RaDU4ubyihJ15w"
    ).toString();
    return ciphertext;
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: {
      email: string;
      password: string;
    } = {
      email,
      password,
    };
    const ciphertext = encrypt(JSON.parse(JSON.stringify(payload)));
    const data = { data: ciphertext, action: "login" };
    axios.post("/api", data).then((res) => {
      const reponse = res.data;
      if (reponse.status === 200) {
        console.log("User logged in successfully");
        localStorage.setItem("isLogin", "true");
        router.push("/home");
      } else if (reponse.status === 401) {
        console.log("Invalid email or password");
      } else if (reponse.status === 400) {
        console.log("Something Went Wrong");
      }
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex relative fadeIn h-screen justify-center items-center overflow-hidden w-screen">
      <Boxes className="h-full " />
      <div className="z-20 max-w-md h-min w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border-neutral-300 bg-black">
        <h2 className="font-bold text-xl text-neutral-200">Welcome to X-Api</h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Login to get started with X-Api
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="user@thexapi.xyz"
              onChange={handleEmailChange}
              type="email"
              value={email}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div>
            Not a member?{" "}
            <a href="#" className="text-neutral-200 hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;
