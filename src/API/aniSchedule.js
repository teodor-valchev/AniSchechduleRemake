import * as API_KEYS from "../API_KEYS.js";

export const getAll = async () => {
    const data = await fetch(`${API_KEYS.ANIME_SCHEDULE_URL}/anime`, {
        headers: {
            'Authorization': `Bearer ${API_KEYS.Anime_Schedule_Token}`,
            "Content-type": "application/json",
        },
    });

    //go to accessRequests: https://cors-anywhere.herokuapp.com

    const parsedData = await data.json();

    return parsedData;
};

export const getOneAnime = async (animeId) => {
    const data = await fetch(
        `${API_KEYS.ANIME_SCHEDULE_URL}/anime/${animeId}`,
        {
            headers: {
                'Authorization': `Bearer ${API_KEYS.Anime_Schedule_Token}`,
                "Content-type": "application/json",
            },
        }
    );

    const parsedData = await data.json();

    return parsedData;
};

export const getSeasonalAnime = async () => {
    const data = await fetch(
        `${API_KEYS.ANIME_SCHEDULE_URL}/timetables/dub?year=2024`,
        {
            headers: {
                'Authorization': `Bearer ${API_KEYS.Anime_Schedule_Token}`,
                "Content-type": "application/json",
            },
        }
    );

    const parsedData = await data.json();

    return parsedData;
};
