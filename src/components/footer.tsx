import React from "react";
import Image from "next/image";
import Logo from '@/assets/icons/logo.png'
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="w-full bg-neutral-900 text-neutral-200 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Branding */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <Image
                            className='mr-2'
                            src={Logo}
                            alt="GameDex_logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <span className="text-xs text-neutral-400">Discover. Review. Track.</span>
                    <Link href="https://api-docs.igdb.com/" target="_blank" className="text-sm text-neutral-400"> Powered by IGDB</Link>
                </div>


                <div className="flex gap-4 align-items-center justify-center">
                    <a href="https://x.com/Gdotkumar145" target="_blank" className="hover:text-sky-400 transition-colors">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12.03 9.5c0 .352.04.695.116 1.022C8.728 10.37 5.7 8.74 3.671 6.25a4.48 4.48 0 0 0-.607 2.256c0 1.557.793 2.933 2.002 3.74a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.34.093-.698.143-1.068.143-.262 0-.513-.025-.76-.073a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.713Z" fill="currentColor" /></svg>
                    </a>
                    <a href="https://github.com/gaurav1452001/GameDex" target="_blank"  className="hover:text-neutral-100 transition-colors">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="currentColor" /></svg>
                    </a>
                </div>
            </div>
            <div className="text-center text-xs text-neutral-500 py-4 border-t border-neutral-800 mt-6">
                &copy; {new Date().getFullYear()} GameDex. All rights reserved.
            </div>
        </footer>
    );
}
