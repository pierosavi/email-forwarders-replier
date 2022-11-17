<script lang="ts">
	import { fly } from 'svelte/transition';
	let emailFrom = '';
	let emailTo = '';

	$: splitEmailFrom = emailFrom.split('@');
	$: replyTo = splitEmailFrom[0] + '+' + emailTo.replace('@', '=') + '@' + splitEmailFrom[1];
</script>

<label for="email_from">Email From</label>
<input id="email_from" type="text" placeholder="Anonaddy alias" bind:value={emailFrom} /><br />
<label for="email_to">Email To</label>
<input id="email_to" type="text" name="email" placeholder="Email To" bind:value={emailTo} /><br />

{#if emailFrom && emailTo}
<input transition:fly type="button" class="button secondary" value="Copy address to clipboard" on:click={() => {
	navigator.clipboard.writeText(replyTo);
}} />
<a transition:fly class="button primary" href="mailto:{ replyTo }">Send Email to: {replyTo}</a>
{/if}