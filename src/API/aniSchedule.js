const ANIME_SCHEDULE_URL = import.meta.env.VITE_ANIME_SCHEDULE_URL;
const API_KEY = import.meta.env.VITE_ANIME_SCHEDULE_TOKEN;

export const getAll = async () => {
    const data = await fetch(`${ANIME_SCHEDULE_URL}/anime`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
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
            "X-Requested-With": "XMLHttpRequest",
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
            "X-Requested-With": "XMLHttpRequest",
        },
    });

    const parsedData = await data.json();

    return parsedData;
};

export const MyProfileAvatar = async () => {
    const data = await fetch(`${ANIME_SCHEDULE_URL}/users/eULTSCghrZ/avatar`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });

    const parsedData = await data.json();

    return parsedData;
};

export const MyProfileStats = async () => {
    const data = await fetch(`${ANIME_SCHEDULE_URL}/users/u7jYwcf2OO/stats`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });

    const parsedData = await data.json();

    return parsedData;
};
