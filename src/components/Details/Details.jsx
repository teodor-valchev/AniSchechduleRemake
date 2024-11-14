import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as apiService from "../../API/aniSchedule.js";

const Details = () => {
    const [anime, setAnime] = useState({});
    const { animeId } = useParams("animeId");

    useEffect(() => {
        apiService.getOneAnime(animeId).then((res) => setAnime(res));
    }, [animeId]);

    const scoreOutOf10 = (anime.stats?.averageScore / 10).toFixed(1);

    const utcDate = new Date(anime.subPremier);

    // Convert to your local time (Bulgaria timezone)
    const localDate = utcDate.toLocaleString("en-BG", {
        timeZone: "Europe/Sofia",
        month: "short",
        day: "numeric",
    });
    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Anime Image Section */}
                <div className="relative">
                    <img
                        src={
                            "https://img.animeschedule.net/production/assets/public/img/" +
                            anime.imageVersionRoute
                        }
                        alt={anime.title}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 p-6 bg-gradient-to-r from-black via-transparent to-black text-white rounded-lg shadow-md max-w-sm">
                        <h1 className="text-5xl font-bold">{anime.title}</h1>
                        <p className="text-lg mt-4">
                            {anime.tagline || "Exciting anime series"}
                        </p>
                    </div>
                </div>

                {/* Anime Description and Details */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                    <h2 className="text-3xl font-semibold">Description</h2>
                    <p className="text-lg">{anime.description}</p>

                    {/* Watch Now Button */}
                    <button className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-md transition duration-300 text-sm">
                        Watch Now
                    </button>
                </div>

                {/* Stats Section */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                    <h2 className="text-3xl font-semibold mb-6">Anime Stats</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Rating */}
                        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
                            <h3 className="text-xl font-semibold">Rating</h3>
                            <p className="text-4xl font-bold mt-2 text-yellow-400">
                                {scoreOutOf10}
                            </p>
                            <span className="text-sm">out of 10</span>
                        </div>

                        {/* Premiere Date */}
                        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
                            <h3 className="text-xl font-semibold">Premiere</h3>
                            <p className="text-2xl font-bold mt-2">
                                {localDate + ",2024"}
                            </p>
                        </div>

                        {/* Genre */}
                        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
                            <h3 className="text-xl font-semibold">Genres</h3>
                            <p
                                className="text-lg font-bold mt-2 whitespace-normal break-words max-h-24 overflow-hidden overflow-ellipsis"
                                title={
                                    anime.genres
                                        ?.map((x) => x.name)
                                        .join(", ") || "Action, Adventure"
                                }
                            >
                                {anime.genres?.map((x) => x.name).join(", ") ||
                                    "Action, Adventure"}
                            </p>
                        </div>

                        {/* Episodes Count */}
                        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
                            <h3 className="text-xl font-semibold">
                                Total Episodes
                            </h3>
                            <p className="text-4xl font-bold mt-2">
                                {anime.episodes || "Still Going"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
