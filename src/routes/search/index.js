import { getName } from "country-list";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const BASE_URL =
        "https://api.openweathermap.org/data/2.5/weather";

    const city = event.url.searchParams.get("city");
    if (!city) {
        return {
            body: {
                error: "Please input a city",
            },
        };
    }
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            data.country = getName(data.sys.country);
            return {
                body: { data },
            };
        } else if (res.status === 404) {
            return {
                body: {
                    error: `The location '${city}' could not be found`,
                },
            };
        } else {
            return {
                body: { error: "Internal server error" },
            };
        }
    } catch (err) {
        console.log(err);
        return {
            body: { error: "Internal server error" },
        };
    }
}
