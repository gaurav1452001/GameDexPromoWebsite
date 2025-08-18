
import React from "react";

const boxData = [
    { id: 1, text: "Keep track of every game you’ve ever played", hover: "#ffadad" },
    { id: 2, text: "Show some love for your favorite games, lists, and reviews with a “like”", hover: "#ffd6a5" },
    { id: 3, text: "Write and share reviews, and follow friends and other players to read theirs", hover: "#fdffb6" },
    { id: 4, text: "Rate each game on a five-star scale (with halves) to record and share your reaction", hover: "#caffbf" },
    { id: 5, text: "Keep a diary of what you’ve played", hover: "#9bf6ff" },
    { id: 6, text: "Share lists of games on any theme and keep a backlog of titles you want to play", hover: "#bdb2ff" },
];

export default function Features() {
    return (
        <div className="flex font-body flex-col items-start gap-2 mt-8 w-5/6 sm:w-2/3 h-4/5 md:h-2/3 lg:h-1/3">
            <div className="text-sm text-neutral-500 mt-2">
                GAMEDEX LETS YOU...
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1 self-stretch align-stretch text-xs sm:text-sm lg:text-sm">
                {boxData.map((box) => (
                    <div
                        key={box.id}
                        className={`rounded-sm feature-box px-3 py-3 feature-box-${box.id} bg-neutral-800 hover:bg-[${box.hover}]`}
                    >
                        {box.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

