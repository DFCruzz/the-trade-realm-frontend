"use client"
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../../public/TTR-white.png"
import { useRouter } from "next/navigation";
import AuthForm from "@/components/authForm";

export default function SignIn() {

  const router = useRouter()

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
        <AuthForm type="signin" />
      </div>
    </div>
  )
}