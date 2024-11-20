import { useEffect, useState } from "react";
import * as animeService from "../../API/aniSchedule";

const Upcoming = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [seasonalAnimes, setSeasonalAnimes] = useState([]);

    useEffect(() => {
        animeService.getSeasonalAnime()
            .then((res) => setSeasonalAnimes(res))
            .finally(setIsLoading(false));
    }, []);

    console.log(seasonalAnimes);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-800 text-center p-8">
                <h1 className="text-5xl font-extrabold">Seasonal Anime</h1>
                <p className="mt-4 text-lg">
                    Explore the best anime of the season
                </p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8 p-4">
                <select className="p-2 bg-gray-800 rounded-md text-white">
                    <option value="">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Romance">Romance</option>
                    <option value="Comedy">Comedy</option>
                </select>
                <select className="p-2 bg-gray-800 rounded-md text-white">
                    <option value="">All Types</option>
                    <option value="TV">TV</option>
                    <option value="Movie">Movie</option>
                    <option value="OVA">OVA</option>
                </select>
                <select className="p-2 bg-gray-800 rounded-md text-white">
                    <option value="">All Status</option>
                    <option value="Airing">Airing</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Anime List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
                {isLoading ? (
                    <div className="col-span-full text-center">
                        <div className="loader animate-spin rounded-full border-4 border-t-4 border-purple-500 h-12 w-12 mx-auto"></div>
                        <p className="mt-4">Loading Anime...</p>
                    </div>
                ) : (
                    seasonalAnimes.map((anime) => (
                        <div
                            key={"s"}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src={
                                    "https://img.animeschedule.net/production/assets/public/img/" +
                                    anime.imageVersionRoute
                                }
                                alt={"title"}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <h3 className="text-xl font-bold">{";s"}</h3>
                                <p className="text-gray-400 text-sm">
                                    {/* {anime.type} | {anime.episodes} Episodes */}
                                </p>
                                <p className="text-sm text-purple-400">{"2"}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Upcoming;
