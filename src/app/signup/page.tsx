"use client";
import React from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { cn } from "@/utils/cn";
import { Boxes } from "@/components/bg";
import axios from "axios";
import CryptoJS from "crypto-js";
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
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastname] = React.useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    } = {
      email,
      password,
      firstName,
      lastName,
    };

    const ciphertext = encrypt(JSON.parse(JSON.stringify(payload)));
    axios.post("/api", { data: ciphertext, action: "signup" }).then((res) => {
      const reponse = res.data;
      if (reponse.status === 200) {
        console.log("User created successfully");
        router.push("/signupsuccess");
      } else if (reponse.status === 400) {
        console.log("User already exists");
      } else if (reponse.status === 403) {
        console.log("Unauthorized access");
      } else if (reponse.status === 401) {
        console.log("Invalid request");
      }
    });
  };
  return (
    <div className="flex relative fadeIn h-screen justify-center items-center overflow-hidden w-screen">
      <Boxes className="h-full " />
      <div className="z-20 max-w-md h-min w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border-neutral-300 bg-black">
        <h2 className="font-bold text-xl text-neutral-200">Welcome to X-Api</h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Signup to get started with X-Api
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                required
                onChange={handleFirstnameChange}
                placeholder="First"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                required
                onChange={handleLastnameChange}
                placeholder="Last"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">email@thexapi.xyz</Label>
            <Input
              id="email"
              onChange={handleEmailChange}
              required
              placeholder="email@thexapi.xyz"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              onChange={handlePasswordChange}
              required
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div>
            Already a member?{" "}
            <a href="/login" className="text-neutral-200 hover:underline">
              Login
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
