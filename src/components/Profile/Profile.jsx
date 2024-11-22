import React, { useEffect, useState } from "react";
import * as animeService from "../../API/aniSchedule";

const Profile = () => {
    const [avatarImg, setAvatarImg] = useState("");
    const [userStats, setUserStats] = useState({});
    const [favouriteGenre, setfavouriteGenre] = useState({});
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
                image: "https://files.oaiusercontent.com/file-uvw1BGoBVWAlIEFqMiiosvIL?se=2024-11-22T14%3A51%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59d5c53e-9517-4afa-9254-5958c8d3aaf2.webp&sig=wXpByXRJb1JOnmA%2B9PHtBg91yPC9VvABPzBYGbMpN%2BY%3D",
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
        animeService.MyProfileStats().then((res) => {
            const favouriteGenre = Object.values(res.userGenreStats).reduce(
                (max, currentValue) => {
                    return currentValue.amount > (max.amount || 0)
                        ? currentValue
                        : max;
                },
                {}
            );
            setfavouriteGenre(favouriteGenre);

            setUserStats(res);
        });
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
                            {Math.floor(userStats.daysAnimeSeen)}
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">
                            Average Anime Score
                        </h3>
                        <p className="text-3xl font-bold text-purple-400">
                            {userStats.averageAnimeScore}
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">
                            Favorite Genre
                        </h3>
                        <p className="text-3xl font-bold text-purple-400">
                            {favouriteGenre.name}
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
