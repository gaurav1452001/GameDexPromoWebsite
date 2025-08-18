
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { HomePageGameType } from "@/types/gameTypes";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function GameDisplay() {
    const [games, setGames] = useState<HomePageGameType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/posts/popular`, {
                    params: {
                        currentOffset: 0,
                        sortOrder: 5,
                    },
                });
                setGames(res?.data);
            } catch (err: any) {
                setError("Failed to fetch games");
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, []);

    if (loading) return <div className="text-neutral-400">Loading games...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="relative w-full max-w-full overflow-x-hidden mt-24 px-3">
            <div
                className="flex gap-4 animate-game-scroll pointer-events-none"
                style={{
                    animation: games && games.length > 0 ? 'game-scroll 30s linear infinite' : undefined,
                    minWidth: '100%',
                    maxWidth: '100vw',
                }}
            >
                {games?.map((game) => (
                    <Image
                        key={game?.id}
                        src={
                            game?.cover?.url
                                ? 'https:' + game.cover.url.replace('t_thumb', 't_cover_big_2x')
                                : '/file.svg'
                        }
                        alt="GameDex"
                        width={180}
                        height={250}
                        className="bg-neutral-700 border border-neutral-600 flex-shrink-0"
                    />
                ))}
            
            </div>
            {/* Mask overlay for fade effect, does not affect layout or scrolling */}
            <div className="pointer-events-none absolute inset-0 w-full h-full z-10" style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }} />
            <style>{`
                @keyframes game-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-game-scroll {
                    width: max-content;
                }
            `}</style>
        </div>
    );
}

