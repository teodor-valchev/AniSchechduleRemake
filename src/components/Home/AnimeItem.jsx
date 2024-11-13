const AnimeItem = ({
    title,
    imageVersionRoute,
    dubPremier,
    episodes,
    genres,
}) => {
    const utcDate = new Date(dubPremier);

    // Convert to your local time (Bulgaria timezone)
    const localDate = utcDate.toLocaleString("en-BG", {
        timeZone: "Europe/Sofia",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-3xl hover:scale-105 transform transition duration-300 shadow-lg">
            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-3xl overflow-hidden">
                {/* Anime Image */}
                <img
                    src={'https://img.animeschedule.net/production/assets/public/img/' + imageVersionRoute}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-3xl"
                />

                {/* Anime Details */}
                <div className="p-5">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-sm text-gray-300 mt-2">
                        📅 Dub Premiere: {localDate}
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                        🎭 Genre: {genres.map((genre) => genre.name + ' ')}
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                        📺 Episodes: {episodes ? episodes : 'Unknown'}
                    </p>
                    <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300">
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimeItem;
