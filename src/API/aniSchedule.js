import * as API_KEYS from "../API_KEYS.js";

export const getAll = async () => {
    const data = await fetch(`${API_KEYS.ANIME_SCHEDULE_URL}`, {
        headers: {
            "X-MAL-CLIENT-ID": `${API_KEYS.Anime_Schedule_Token}`,
            "Content-type": "application/json",
        },
    });

    const parsedData = await data.json();
    console.log(parsedData);

    return data;
};
