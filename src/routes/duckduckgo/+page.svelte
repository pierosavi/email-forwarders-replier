<script>
	// import { Button } from '@svelteuidev/core';

	let emailFrom = '';
	let emailTo = '';
	// support@google.com becomes support_at_google.com

	$: replyTo = (emailTo.replace('@', '_at_')) + ('_' + emailFrom);
</script>

<input type="text" name="email" placeholder="DuckDuckGo alias" bind:value={emailFrom} /><br />
<input type="text" name="no" placeholder="Email To" bind:value={emailTo} /><br />

<a href="mailto:{ replyTo }">Send Email to: {replyTo}</a><br />
<input type="button" value="Copy address to clipboard" on:click={() => {
	navigator.clipboard.writeText(replyTo);
}} />
<!-- <Button on:click={() => {
	navigator.clipboard.writeText(replyTo);
}}>Copy address</Button> -->