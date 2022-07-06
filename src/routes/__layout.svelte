<script lang="ts">
	import '../styles/global.css';
	let activeElem: string = 'about';
	let items: { name: string; id: number }[] = [
		{ name: 'about', id: 1 },
		{ name: 'background', id: 2 },
		{ name: 'achivements', id: 3 },
		{ name: 'contact', id: 4 }
	];
</script>
<main>
<header>
	<div class="TopBar">
		<ul>
			{#each items as item}
				<li>
					<a
						href="./{item.name != 'about' ? item.name : ''}"
						class={item.name === activeElem ? 'active' : item.id % 2 ? 'odd' : 'even'}
						on:click={() => {
							activeElem = item.name;
						}}
						>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
						<!-- Capitalize first letter -->
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>
	<slot />
</main>

<style>
	ul {
		display: flex;
		justify-content: center;
		list-style-type: none;
	}
	.TopBar {
		margin: 0;
		display: flex;
		justify-content: center;
		background-color: rgb(14, 63, 155);
		padding: 5px;
		border-radius: 10px;
		font-size: 31px;
		font-weight: 600;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.active {
		background-color: rgb(10, 4, 70);
		color: white;
		text-decoration: none;
		padding: 20px;
		margin: 15px;
		border-radius: 10px;
	}
	.odd {
		background-color: rgb(92, 136, 207);
		text-decoration: none;
		padding: 25px;
		margin: 10px;
		border-radius: 10px;
	}

	.even {
		background-color: rgb(63, 94, 220);
		text-decoration: none;
		padding: 25px;
		margin: 10px;
		border-radius: 10px;
	}
	a {
		text-decoration: none;
		color: white;
	}

</style>
