import { useParams } from "react-router-dom";

const Details = () => {
    const { animeId } = useParams("animeId");
    console.log(animeId);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Anime Image Section */}
                <div className="relative">
                    <img
                        src={''}
                        alt={''}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 p-6 bg-gradient-to-r from-black via-transparent to-black text-white rounded-lg shadow-md max-w-sm">
                        <h1 className="text-5xl font-bold">{''}</h1>
                        <p className="text-lg mt-4">{''}</p>
                    </div>
                </div>

                {/* Anime Description and Details */}
                <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                    <h2 className="text-3xl font-semibold">Description</h2>
                    <p className="text-lg">{''}</p>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">Genres</h2>
                        <ul className="flex space-x-4">
                            {/* {anime.genres.map((genre, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-full"
                                >
                                    {genre}
                                </li>
                            ))} */}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Episodes</h2>
                        <p>{''} episodes</p>
                    </div>

                    <button
                        onClick={''}
                        className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-md transition duration-300 text-sm"
                    >
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
