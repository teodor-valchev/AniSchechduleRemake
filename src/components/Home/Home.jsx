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
        <div className="bg-white" style={{ display: "flex" }}>
            <div className="mt-6 grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {animes.map((item) => (
                    <AnimeItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
