import { useEffect, useState } from "react";

import * as apiService from "../../API/aniSchedule.js";
import AnimeItem from "./AnimeItem.jsx";

const Home = () => {
    const [animes, setAnime] = useState([]);
    console.log(animes);
    

    useEffect(() => {
        apiService.getAll().then((res) => setAnime(res.anime));
    }, []);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    AnimeHeader
                </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
                {animes.map((item) => (
                    <AnimeItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
