import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/icons/logo.png'
import Github from '@/assets/icons/logo-github.svg'
import Person from '@/assets/icons/person-circle-outline.svg'
import Forward from '@/assets/icons/arrow-forward-outline.svg'
import { PT_Serif, Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import Features from '@/components/features'
import GameDisplay from '@/components/gameDisplay'
import AndroidButton from '@/components/androidButton'
import IosButton from '@/components/iosButton'
import Footer from '@/components/footer'

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-PTSerif",
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: "300",
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
        <div className='flex flex-row gap-4'>
          <Link target="_blank" href="https://github.com/gaurav1452001/GameDex">
            <Image src={Github} alt="Github Link" width={30} height={20} className='invert' />
          </Link>
          <Link target="_blank" href="https://kumargaurav.me">
            <Image src={Person} alt="Personal Website" width={35} height={30} />
          </Link>
        </div>

      </div>
      <div className='flex flex-col justify-center items-center mt-10 sm:mt-12 md:mt-20 lg:mt-40 xl:mt-[15rem]'>
        <span className='mt-2 px-10 lg:px-16 xl:w-1/2 text-center font-head text-lg sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl'>Discover popular games.</span>
        <span className='mt-2 px-10 lg:px-16 xl:w-1/2 text-center font-head text-lg sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl'>Create reviews or lists for games.</span>
        <span className='mt-2 px-10 lg:px-16 xl:w-1/2 text-center font-head text-lg sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl'>Find and follow people like you.</span>

        <Link href="https://gamedexdemo.vercel.app/" target="_blank" className='flex items-center gap-2 font-body mt-10 px-2 lg:px-5 py-1 lg:py-2 rounded-sm font-extrabold text-xs sm:text-base lg:text-lg bg-violet-600 hover:bg-violet-700 hover:text-neutral-200 text-center'>
          <span>Web Preview for App</span>
          <Image src={Forward} alt="Download APK" width={20} height={20} className='invert' />
        </Link>
        <div className='flex flex-row align-items-center gap-9 mt-7 px-4'>
          <AndroidButton />
          <IosButton />
        </div>
        <div className='mt-7 text-neutral-400 font-body text-[0.6rem] sm:text-base'>
          Will be available on Google Play Store soon.
        </div>
        <GameDisplay />
        <Features />
      </div>
      <Footer/>
    </div>
  )
}

export default Page