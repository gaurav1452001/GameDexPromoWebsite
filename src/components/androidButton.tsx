import React from 'react'
import Image from 'next/image'
import Apk from '@/assets/icons/logo_android.svg'
import Download from '@/assets/icons/download.svg'
import Link from 'next/link'

const AndroidButton = () => {
    return (
        <Link href="https://github.com/gaurav1452001/GameDex/releases/download/apk/application-f299aa30-b641-4664-adcf-1c687a0330fd.1.apk" className="bg-slate-800  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-[0.8rem] sm:text-base font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex justify-between  z-10 rounded-full font-sans bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                <div className='flex flex-row'>
                    <Image src={Apk} alt="Download APK" width={20} height={20} className='invert mr-2' />
                    <span>
                        APK for Android
                    </span>
                </div>
                <Image src={Download} alt="Download Icon" width={20} height={20} className='ml-2' />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
    )
}

export default AndroidButton
