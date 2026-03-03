import { describe, it, expect } from 'vitest';
import { generateReplyAddress } from './anonaddy.js';

describe('generateReplyAddress (AnonAddy)', () => {
	it('generates a reply address from alias and sender email', () => {
		expect(generateReplyAddress('user@anonaddy.com', 'sender@example.com')).toBe(
			'user+sender=example.com@anonaddy.com'
		);
	});

	it('handles subdomains in emailTo', () => {
		expect(generateReplyAddress('alias@anonaddy.me', 'support@mail.google.com')).toBe(
			'alias+support=mail.google.com@anonaddy.me'
		);
	});

	it('preserves the forwarder domain', () => {
		expect(generateReplyAddress('myalias@my.anonaddy.com', 'hello@world.com')).toBe(
			'myalias+hello=world.com@my.anonaddy.com'
		);
	});
});
