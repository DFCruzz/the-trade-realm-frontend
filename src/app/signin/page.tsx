"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../../public/TTR-white.png"

export default function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#fbf6ee]">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[#dedacf] shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-[#262626] px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src={LogoWhite}
              alt="Logo"
              className="rounded-full"
              width={56}
              height={56}
            />
          </Link>
          <h3 className="text-xl font-semibold text-[#fbf6ee]">Sign In</h3>
          <p className="text-sm text-[#7a7256]">
            Use your email and password to sign in
          </p>
        </div>
        <form className="flex flex-col space-y-4 bg-[#fbf6ee]px-4 py-8 sm:px-16">
          <div>
            <label htmlFor="email"
              className="block text-xs text-gray-600 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password..."
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <button
            disabled={isLoading}
            className={`${isLoading
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border-black bg-black text-white hover:bg-white hover:text-black"
              } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
          >
            <p>Sign In</p>
          </button>
          <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
        </p>
        </form>
      </div>
    </div>
  )
}