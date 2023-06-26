"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AuthForm({ type }: { type: "signin" | "signup" }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
          if (type === "signin") {
            signIn("credentials", {
              redirect: false,
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
              // @ts-ignore
            }).then(({ error }) => {
              if (error) {
                setIsLoading(false);
                toast.error(error);
              } else {
                router.refresh();
                router.push("/main");
              }
            });
          } else {
            fetch("http://localhost:4000/auth/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
              }),
            }).then(async (res) => {
              setIsLoading(false);
              if (res.status === 201) {
                toast.success("Account created! Redirecting to login...");
                setTimeout(() => {
                  router.push("/signin");
                }, 2000);
              } else {
                const { error } = await res.json();
                toast.error(error);
              }
            });
          }
        }}
        className="flex flex-col space-y-4 bg-[#fbf6ee]px-4 py-8 sm:px-16"
      >
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
            ? "cursor-not-allowed"
            : "border-[#7a7256] bg-[#262626] text-[#dedacf] hover:bg-[#fbf6ee] hover:text-[#262626]"
            } flex font-semibold h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        > {type === "signin" ? (
            <p>Sign In</p>
            ) : ( <p>Sign Up</p>
          )}
        </button>
        {type === "signin" ? (
          <p className="text-center text-sm text-[#7a7256]">
            Do not have an account?{" "}
            <Link href="/signup" className="font-semibold text-[#262626]">
              Sign Up
            </Link>{" "}
          </p>) : (
          <p className="text-center text-sm text-[#7a7256]">
            Already have an account?{" "}
            <Link href="/signin" className="font-semibold text-[#262626]">
              Sign In
            </Link>{" "}
          </p>
        )}
        <p className="text-center text-sm text-[#262626]">OR</p>
      </form>
      <div className="flex flex-col items-center space-y-4 bg-[#fbf6ee]px-4 -mt-6 sm:px-16" >
        <button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true)
            signIn("google", { callbackUrl: "/main" })
          }}
          className={`${isLoading
            ? "cursor-not-allowed"
            : "border-[#7a7256] bg-[#262626] text-[#dedacf] hover:bg-[#fbf6ee] hover:text-[#262626]"
            } flex font-semibold h-10 w-2/4 mb-5 items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          <p>Sign In with Google</p>
        </button>
      </div>
    </>
  )
}