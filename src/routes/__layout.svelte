<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
    import SearchForm from "$lib/SearchForm.svelte";
</script>

<svelte:head>
    <title>Weather App</title>
</svelte:head>

<Header />
<SearchForm />

<main>
    <slot />
</main>

<style>
    main {
        margin-top: 15px;
    }
</style>
