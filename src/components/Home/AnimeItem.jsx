

const AnimeItem = ({ title, imageVersionRoute, dubPremier, episodes, genres }) => {
    const utcDate = new Date(dubPremier);

    // Convert to your local time (Bulgaria timezone)
    const localDate = utcDate.toLocaleString("en-BG", {
        timeZone: "Europe/Sofia",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="group relative">
            <div className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                {title}
            </div>
            <div>
                <div className="info flex items-center justify-evenly">
                    <span>Dub premiere: {localDate}</span>
                    <span>Episodes: {episodes ? episodes : "UNKNOWN"}</span>
                </div>
                <div className="genres flex justify-between bg-antiquewhite">
                    {genres.map((g) => (
                        <span className="genre">
                            <span>{g.name}</span>
                        </span>
                    ))}
                </div>
            </div>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt={title}
                    src={
                        `https://img.animeschedule.net/production/assets/public/img/` +
                        imageVersionRoute
                    }
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={""}>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                            {""}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{""}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{""}</p>
            </div>
        </div>
    );
};

export default AnimeItem;