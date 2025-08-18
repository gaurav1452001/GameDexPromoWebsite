import React from 'react'
import Image from 'next/image'
import Apk from '@/assets/icons/logo_android.svg'
import Download from '@/assets/icons/download.svg'
import Link from 'next/link'

const AndroidButton = () => {
    return (
        <Link href="https://wf-artifacts.eascdn.net/builds/internal-st/166ab36a-5f6e-421f-b9f1-247029dda2a9/f299aa30-b641-4664-adcf-1c687a0330fd/0198b4f7-cf9a-7ffb-a935-b34813aafa9d/application-f299aa30-b641-4664-adcf-1c687a0330fd.apk?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=75d871a1a44e598975dd84fa2341c9b0%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T215132Z&X-Amz-Expires=900&X-Amz-Signature=40e122696fccb1e75d89e3282244edb25576f5930cd75bcffee2f5dbeed4afaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" className="bg-slate-800  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-[0.8rem] sm:text-base font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full font-sans bg-zinc-950 py-1 px-2 md:py-2 md:px-4 ring-1 ring-white/10 ">
                <Image src={Apk} alt="Download APK" width={30} height={20} className='invert mr-2' />
                <div className='flex flex-row'>
                    <span>
                        APK for Android
                    </span>
                    <Image src={Download} alt="Download Icon" width={20} height={20} className='ml-2' />
                </div>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
    )
}

export default AndroidButton
