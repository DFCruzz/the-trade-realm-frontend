import Image from 'next/image'
import Link from 'next/link'
import LogoColored from "../../public/TTR-colored.png"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-[#fbf6ee]">
      <div className="flex flex-col w-full items-center justify-around p-24 space-y-8">
        <div className="flex flex-col w-2/4 h-24 items-center rounded-xl shadow-2xl bg-[#262626]">
          <p className="flex justify-center items-center h-screen font-sans text-3xl text-[#7a7256]">
            Welcome To
          </p>
        </div>
        <Link href="/">
          <Image
            src={LogoColored}
            alt="Logo"
            className="rounded-full"
            height={180}
            width={180}
          />
        </Link>
        <div className="flex flex-col w-2/4 h-24 items-center rounded-xl shadow-2xl bg-[#262626]">
          <p className="flex justify-center items-center h-screen font-sans text-5xl text-[#7a7256]">
            The Trade Realm
          </p>
        </div>
      </div>
      <div className="flex w-2/4 items-center justify-around p-12 ">
        <Link href="/signin">
        <div className="flex h-10 w-full items-center justify-center rounded-md border text-sm focus:outline-none border-[#262626] bg-[#262626] text-[#dedacf] transition-all hover:bg-[#dedacf] hover:text-[#262626]">
          <h3>
            SignIn
          </h3>
        </div>
        </Link>
        <Link href="/signup">
        <div className="flex h-10 w-full items-center justify-center rounded-md border text-sm focus:outline-none border-[#262626] bg-[#262626] text-[#dedacf] transition-all hover:bg-[#dedacf] hover:text-[#262626]">
          <h3>
            SignUp
          </h3>
        </div>
        </Link>
      </div>
    </main>
  )
}
