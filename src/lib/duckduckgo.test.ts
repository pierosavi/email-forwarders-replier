import { describe, it, expect } from 'vitest';
import { generateReplyAddress } from './duckduckgo.js';

describe('generateReplyAddress (DuckDuckGo)', () => {
	it('generates a reply address from alias and sender email', () => {
		expect(generateReplyAddress('myalias@duck.com', 'support@google.com')).toBe(
			'support_at_google.com_myalias@duck.com'
		);
	});

	it('replaces @ with _at_ in the sender email', () => {
		expect(generateReplyAddress('alias@duck.com', 'hello@example.org')).toBe(
			'hello_at_example.org_alias@duck.com'
		);
	});

	it('preserves the full DuckDuckGo alias', () => {
		expect(generateReplyAddress('custom_alias@duck.com', 'news@site.com')).toBe(
			'news_at_site.com_custom_alias@duck.com'
		);
	});
});
