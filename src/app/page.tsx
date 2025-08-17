import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/icons/logo.png'
import Apk from '@/assets/icons/logo_android.svg'
import Ias from '@/assets/icons/logo_apple.svg'
import { PT_Serif, Noto_Sans } from 'next/font/google'
import Link from 'next/link'

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-PTSerif",
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-NotoSans",
});

const Page = () => {
  return (
    <div className={`py-4 ${ptSerif.variable} ${notoSans.variable}`}>
      <div className='absolute top-0 w-full -z-10 mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%'>
        <Image
          className='mx-auto'
          src="/lou2_cover.jpg"
          alt="Background Image"
          height={900}
          width={1920}
          objectFit="contain"
        />
      </div>
      <div className='flex flex-row justify-between items-center text-white px-2 sm:px-5 md:px-20 lg:px-48 xl:px-72'>
        <Image
          className='mr-2'
          src={Logo}
          alt="GameDex_logo"
          width={100}
          height={100}
        />
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-1 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
            <span>
              Join the Waitlist
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
      <div className='flex flex-col justify-center items-center h-screen xl:mt-14'>
        <span className='mt-2 px-10 lg:px-16 xl:w-1/2 text-center font-head text-4xl'>Discover and track popular games.</span>
        <span className='mt-2 px-10 lg:px-16 xl:w-1/2 text-center font-head text-4xl'>Share and create reviews or lists.</span>
        <span className='mt-2 px-10 lg:px-16 xl:w-1/2 text-center font-head text-4xl'>Find and follow people like you.</span>

        <Link href="https://gamedexdemo.vercel.app/" target="_blank" className='font-body mt-10 px-2 lg:px-5 py-1 lg:py-2 rounded-sm font-extrabold text-lg bg-violet-600 hover:bg-violet-700 hover:text-neutral-200 text-center'>
          Demo Website
        </Link>
        <div className='flex flex-row align-items-center gap-9 mt-7'>
          <Link href="#" className="flex items-center font-body gap-2 bg-neutral-200 hover:bg-neutral-400 text-black font-semibold py-2 px-6 rounded-sm shadow transition-colors">
            <Image src={Apk} alt="Download APK" width={30} height={30} />
            <span>Download APK for Android</span>
          </Link>

          <Link href="#" className="flex items-center font-body gap-2 cursor-pointer bg-neutral-200 hover:bg-neutral-400 text-black font-semibold py-2 px-6 rounded-sm shadow transition-colors">
            <Image src={Ias} alt="Download IPA" width={30} height={30} />
            <span>Download IPA for iOS</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page