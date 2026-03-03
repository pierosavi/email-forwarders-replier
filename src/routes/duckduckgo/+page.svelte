<script lang="ts">
	import { fly } from 'svelte/transition';
	import { generateReplyAddress } from '$lib/duckduckgo.js';
	let emailFrom = '';
	let emailTo = '';

	$: replyTo = generateReplyAddress(emailFrom, emailTo);
</script>

<div class="card form-card">
	<div class="field">
		<label for="email_from">Email From</label>
		<input id="email_from" type="text" placeholder="DuckDuckGo alias" bind:value={emailFrom} />
	</div>
	<div class="field">
		<label for="email_to">Email To</label>
		<input id="email_to" type="text" placeholder="Email To" bind:value={emailTo} />
	</div>

	{#if emailFrom && emailTo}
		<div transition:fly class="reply-address">
			<code>{replyTo}</code>
		</div>
		<div transition:fly class="grouped">
			<input
				type="button"
				class="button secondary"
				value="Copy to clipboard"
				on:click={() => navigator.clipboard.writeText(replyTo)}
			/>
			<a class="button primary" href="mailto:{replyTo}">Send Email to: {replyTo}</a>
		</div>
	{/if}
</div>

<style>
	.form-card {
		max-width: 480px;
		margin: 1rem auto;
	}
	.field {
		margin-bottom: 1rem;
	}
	.reply-address {
		background: var(--bg-secondary-color);
		border-radius: 4px;
		margin-bottom: 1rem;
		padding: 0.75rem 1rem;
		word-break: break-all;
	}
</style>
