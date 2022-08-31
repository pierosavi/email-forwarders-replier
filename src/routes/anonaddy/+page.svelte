<script lang="ts">
	let emailFrom = '';
	let emailTo = '';

	$: splitEmailFrom = emailFrom.split('@');
	$: replyTo = splitEmailFrom[0] + '+' + emailTo.replace('@', '=') + '@' + splitEmailFrom[1];
</script>

<input type="text" placeholder="Anonaddy alias" bind:value={emailFrom} /><br />
<input type="text" name="email" placeholder="Email To" bind:value={emailTo} /><br />

<a href="mailto:{ replyTo }">Send Email to: {replyTo}</a><br />
<input type="button" value="Copy address to clipboard" on:click={() => {
	navigator.clipboard.writeText(replyTo);
}} />