import React, { useEffect, useState } from "react";
import * as animeService from "../../API/aniSchedule";

const Profile = () => {
    const [avatarImg, setAvatarImg] = useState("");
    const [userStats, setUserStats] = useState({});
    const user = {
        name: "Reazer987",
        bio: "Anime enthusiast and full-time otaku. Always hunting for the next great series.",
        profilePicture: "https://avatars.dicebear.com/api/male/user123.svg", // Replace with user's avatar URL
        stats: {
            totalAnimeWatched: 128,
            totalHours: 456,
            favoriteGenre: "Action",
        },
        favoriteAnime: [
            {
                id: 1,
                title: "Attack on Titan",
                image: "https://cdn.myanimelist.net/images/anime/10/86336l.jpg",
            },
            {
                id: 2,
                title: "Jujutsu Kaisen",
                image: "https://cdn.myanimelist.net/images/anime/1000/110531l.jpg",
            },
            {
                id: 3,
                title: "Demon Slayer",
                image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
            },
        ],
    };

    useEffect(() => {
        animeService.MyProfileAvatar().then((res) => setAvatarImg(res));
    }, []);
    
    useEffect(() => {
        animeService.MyProfileStats().then((res) => setUserStats(res));
    }, []);



    console.log(userStats);
    

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            {/* Header Section */}
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src={avatarImg}
                        alt={user.name}
                        className="w-32 h-32 rounded-full border-4 border-purple-500"
                    />
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-center text-gray-400 max-w-md">
                        {user.bio}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">
                            Total Anime Watched
                        </h3>
                        <p className="text-3xl font-bold text-purple-400">
                            {user.stats.totalAnimeWatched}
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">
                            Total Hours Spent
                        </h3>
                        <p className="text-3xl font-bold text-purple-400">
                            {user.stats.totalHours} hrs
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">
                            Favorite Genre
                        </h3>
                        <p className="text-3xl font-bold text-purple-400">
                            {user.stats.favoriteGenre}
                        </p>
                    </div>
                </div>

                {/* Favorite Anime Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Favorite Anime</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {user.favoriteAnime.map((anime) => (
                            <div
                                key={anime.id}
                                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                            >
                                <img
                                    src={anime.image}
                                    alt={anime.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        {anime.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
