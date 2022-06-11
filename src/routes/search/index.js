const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const city = event.url.searchParams.get("city");
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        return {
            status: res.status,
            body: { data },
        };
    } else {
        return {
            status: res.status,
            body: {},
        };
    }
}
