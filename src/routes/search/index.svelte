<script>
    export let data;
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`;
</script>

<section>
    <h2>{data.name}, {data.sys.country}</h2>
    <p class="description">{data.weather[0]?.description}</p>
    <div class="summary">
        <img
            title={data.weather[0]?.description}
            alt="icon for weather"
            src={iconURL}
        />
        <span title="temperature" class="temp"
            >{data.main.temp} °C</span
        >
    </div>
    <ul>
        <li title="cloudiness">
            <i class="fa-solid fa-cloud" />
            {data.clouds.all} %
        </li>
        <li title="humidity">
            <i class="fa-solid fa-droplet" />
            {data.main.humidity} %
        </li>
        <li title="atmospheric pressure">
            <i class="fa-solid fa-down-left-and-up-right-to-center" />
            {data.main.pressure} hPa
        </li>
        <li title="wind">
            <i>
                <span
                    id="windIcon"
                    style="--deg: {data.wind.deg}"
                    class="fa-solid fa-wind"
                />
            </i>
            {data.wind.speed} m/s
        </li>
    </ul>
</section>

<style>
    section {
        font-size: 20px;
        max-width: 340px;
        padding: 10px;
        margin: 0 auto;
    }
    h2 {
        font-weight: 500;
        font-size: 36px;
        color: yellow;
    }

    .summary {
        display: flex;
        align-items: center;
    }
    .temp {
        font-size: 32px;
        color: orange;
    }
    ul {
        list-style-type: none;
    }
    li {
        margin: 10px 0px;
    }
    li > i {
        display: inline-block;
        width: 30px;
        color: skyblue;
    }
    #windIcon {
        transform: rotate(calc(var(--deg) * 1deg + 90deg));
    }
</style>
