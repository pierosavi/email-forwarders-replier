export function generateReplyAddress(emailFrom: string, emailTo: string): string {
	return `${emailTo.replace('@', '_at_')}_${emailFrom}`;
}
