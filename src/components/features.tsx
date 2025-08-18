
import Image from "next/image";
import React from "react";
import Feat1 from "@/assets/icons/like.svg";
import Feat2 from "@/assets/icons/diary.svg";
import Feat3 from "@/assets/icons/review.svg";
import Feat4 from "@/assets/icons/share.svg";
import Feat5 from "@/assets/icons/star.svg";
import Feat6 from "@/assets/icons/track.svg";

const boxData = [
    { id: 1, text: "Express appreciation for games, lists, and reviews with a like", hover: "#EF476F" },
    { id: 2, text: "Maintain a diary to log what you play, wishlist and are playing currently", hover: "#1B9AAA" },
    { id: 3, text: "Write reviews, comments, and follow friends for updates", hover: "#A22522" },
    { id: 4, text: "Create and share themed game lists or manage your backlog", hover: "#084887" },
    { id: 5, text: "Rate each game using a five-star scale, including half stars", hover: "#357266" },
    { id: 6, text: "Organize your entire video game collection in one place", hover: "#9055A2" },
];

export default function Features() {
    return (
        <div className="flex font-sans flex-col items-start gap-2 mt-10 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-72">
            <div className="text-base text-neutral-500 mt-2">
                GAMEDEX LETS YOU...
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 self-stretch align-stretch text-base">
                {boxData.map((box) => (
                    <div
                        key={box.id}
                        className={`flex flex-row items-center gap-3 h-36 xl:gap-5 rounded-sm feature-box px-3 md:px-7 py-4 md:py-7 feature-box-${box.id} bg-neutral-800 transition-colors duration-200`}
                        style={{ cursor: "pointer" }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = box.hover)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}
                    >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                            <Image src={box.id === 1 ? Feat1 : box.id === 2 ? Feat2 : box.id === 3 ? Feat3 : box.id === 4 ? Feat4 : box.id === 5 ? Feat5 : Feat6} alt="image" width={30} height={30} className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex-1 break-words">
                            {box.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

