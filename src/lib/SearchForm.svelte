<form method="get" action="/search">
	<input type="search" name="city" placeholder="City" />
	<button type="submit">Search</button>
</form>

<style>
	form {
		display: flex;
		gap: 15px;
		flex-direction: column;
		align-items: center;
		padding: 10px;
	}
	button {
		background-color: darkgreen;
		padding: 5px 10px;
		border-radius: 4px;
		text-transform: uppercase;
	}
	button:focus,
	button:hover {
		filter: brightness(1.2);
	}
	input {
		color: #fff !important;
		text-align: center;
		border-bottom: 1px solid #555;
		padding: 4px;
		font-size: 18px;
	}
	input:focus {
		border-bottom: 1px solid #fff;
	}
</style>
