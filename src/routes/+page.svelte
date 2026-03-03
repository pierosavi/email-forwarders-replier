<script>
	import { resolve } from '$app/paths';
</script>

<h2>Email Reply Generator</h2>
<p class="text-grey">Generate reply-to addresses for your email forwarding aliases.</p>

<div class="row">
	<div class="col">
		<div class="card">
			<h4>AnonAddy</h4>
			<p>Generate reply addresses for your AnonAddy aliases.</p>
			<a class="button primary" href={resolve('/anonaddy')}>Open</a>
		</div>
	</div>
	<div class="col">
		<div class="card">
			<h4>DuckDuckGo</h4>
			<p>Generate reply addresses for your DuckDuckGo email aliases.</p>
			<a class="button primary" href={resolve('/duckduckgo')}>Open</a>
		</div>
	</div>
</div>
