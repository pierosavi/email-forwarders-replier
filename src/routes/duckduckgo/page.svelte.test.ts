import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import { describe, it, expect } from 'vitest';
import DuckDuckGoPage from './+page.svelte';

describe('DuckDuckGo page', () => {
	it('renders the email input fields', async () => {
		render(DuckDuckGoPage);
		await expect.element(page.getByLabelText('Email From')).toBeInTheDocument();
		await expect.element(page.getByLabelText('Email To')).toBeInTheDocument();
	});

	it('does not show reply buttons when inputs are empty', async () => {
		render(DuckDuckGoPage);
		await expect.element(page.getByText(/Send Email to/)).not.toBeInTheDocument();
	});

	it('shows the reply address when both inputs are filled', async () => {
		render(DuckDuckGoPage);
		await page.getByLabelText('Email From').fill('myalias@duck.com');
		await page.getByLabelText('Email To').fill('support@google.com');
		await expect
			.element(page.getByText('Send Email to: support_at_google.com_myalias@duck.com'))
			.toBeVisible();
	});
});
