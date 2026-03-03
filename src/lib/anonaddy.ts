export function generateReplyAddress(emailFrom: string, emailTo: string): string {
	const [alias, domain] = emailFrom.split('@');
	return `${alias}+${emailTo.replace('@', '=')}@${domain}`;
}
