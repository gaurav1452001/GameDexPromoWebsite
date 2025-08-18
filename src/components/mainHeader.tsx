"use client";

export function MainHeader() {
    return (
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 mx-auto px-5 sm:px-2 ">
            <div className="flex flex-col items-center justify-center mt-10 text-center font-bold">
                <div className="text-6xl font-sans tracking-tight">
                    Track and Discover
                </div>
                <div className="text-3xl font-sans mt-5 font-extrabold bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
                    Video Games Like Never Before
                </div>
                <div className="text-base md:text-lg font-sans font-extralight mt-10 lg:px-10">
                    Think Letterboxd but for video games. You can track, review, create lists for video games that you love. Follow your friends and discover new titles.
                </div>
            </div>
        </div>
    );
}
