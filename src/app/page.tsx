"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/icons/logo.png'
import { MainHeader } from '@/components/mainHeader'
import Github from '@/assets/icons/logo-github.svg'
import Person from '@/assets/icons/person-circle-outline.svg'
import Twitter from '@/assets/icons/logo-twitter.svg'
import Forward from '@/assets/icons/arrow-forward-outline.svg'
import animation from "@/assets/icons/pulsegreen.gif"
import Link from 'next/link'
import Features from '@/components/features'
import GameDisplay from '@/components/gameDisplay'
import AndroidButton from '@/components/androidButton'
import Showcase from '@/components/showcase'
import Footer from '@/components/footer'
import IosButton from '@/components/iosButton'

const Page = () => {

  return (
    <div className={`min-h-screen w-full bg-[#020617] relative py-4`}>
      {/* Magenta Orb Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className='absolute z-10'>
        <div className='flex flex-row justify-between items-center text-white px-2 sm:px-5 md:px-20 lg:px-48 xl:px-96' >
          <Image
            className='mr-2'
            src={Logo}
            alt="GameDex_logo"
            width={100}
            height={100}
          />
          <div className='flex flex-row gap-4 align-items-center'>
            <Link target="_blank" href="https://github.com/gaurav1452001/GameDex">
              <Image src={Github} alt="Github Link" width={30} height={20} className='invert' />
            </Link>
            <Link target="_blank" href="https://kumargaurav.me">
              <Image src={Person} alt="Personal Website" width={30} height={30} className='' />
            </Link>
            <Link target="_blank" href="https://x.com/Gdotkumar145">
              <Image src={Twitter} alt="Twitter" width={30} height={30} className='invert' />
            </Link>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-2 sm:mt-12 md:mt-15'>
          <Link href="https://gamedexdemo.vercel.app/" target="_blank" className='flex items-center gap-2  mt-10 px-2 lg:px-3 py-1 lg:py-2 rounded-3xl border border-neutral-600 bg-black text-white text-[0.9rem] '>

            <Image src={animation} alt="WebPreview" width={25} height={25} />
            <span>Web Preview for App</span>
            <Image src={Forward} alt="WebPreview" width={15} height={10} className='invert' />
          </Link>
          <MainHeader />

          <div className='flex flex-col gap-2.5 mt-7 ld:mt-20 px-2 lg:px-4'>
            <AndroidButton />
            <IosButton/>
          </div>
          <div className='mt-7 text-neutral-400 font-sans text-[0.6rem] sm:text-base'>
            Will be available on Google Play Store soon.
          </div>
          <GameDisplay />
          <Features />
          <Showcase />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page

