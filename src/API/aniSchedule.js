const ANIME_SCHEDULE_URL = import.meta.env.VITE_ANIME_SCHEDULE_URL;
const API_KEY = import.meta.env.VITE_ANIME_SCHEDULE_TOKEN;

export const getAll = async () => {
    console.log(import.meta.env.VITE_API_URL);
    const data = await fetch(`${ANIME_SCHEDULE_URL}/anime`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
        },
    });

    //go to accessRequests: https://cors-anywhere.herokuapp.com

    const parsedData = await data.json();

    return parsedData;
};

export const getOneAnime = async (animeId) => {
    const data = await fetch(`${ANIME_SCHEDULE_URL}/anime/${animeId}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
        },
    });

    const parsedData = await data.json();

    return parsedData;
};

export const getSeasonalAnime = async () => {
    const data = await fetch(`${ANIME_SCHEDULE_URL}/timetables/dub?year=2024`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
        },
    });

    const parsedData = await data.json();

    return parsedData;
};
