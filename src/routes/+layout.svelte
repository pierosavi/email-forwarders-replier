<script>
	import 'chota/dist/chota.min.css';
</script>

<div class="container">
	<nav class="nav">
		<div class="nav-center">
			<a class="brand" href="/">Home</a>
			<div class="tabs">
				<a href="/anonaddy">Anonaddy</a>
				<a href="/duckduckgo">DuckDuckGo</a>
			</div>
		</div>
	</nav>
	<br />
	<div class="text-center">
		<slot />
	</div>
</div>

<footer class="footer is-center">
	Made with&nbsp;<a href="https://svelte.dev">Svelte</a>&nbsp;and&nbsp;<a href="https://github.com/jenil/chota">Chota</a>&nbsp;by&nbsp;<a href="https://github.com/pierosavi">@pierosavi</a>
</footer>

<style>
.footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: #f5f5f5;
}
</style>