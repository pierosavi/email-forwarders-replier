import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import { describe, it, expect } from 'vitest';
import AnonaddyPage from './+page.svelte';

describe('AnonAddy page', () => {
	it('renders the email input fields', async () => {
		render(AnonaddyPage);
		await expect.element(page.getByLabelText('Email From')).toBeInTheDocument();
		await expect.element(page.getByLabelText('Email To')).toBeInTheDocument();
	});

	it('does not show reply buttons when inputs are empty', async () => {
		render(AnonaddyPage);
		await expect.element(page.getByText(/Send Email to/)).not.toBeInTheDocument();
	});

	it('shows the reply address when both inputs are filled', async () => {
		render(AnonaddyPage);
		await page.getByLabelText('Email From').fill('user@anonaddy.com');
		await page.getByLabelText('Email To').fill('sender@example.com');
		await expect
			.element(page.getByText('Send Email to: user+sender=example.com@anonaddy.com'))
			.toBeVisible();
	});
});
