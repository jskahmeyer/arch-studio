import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { axe } from 'jest-axe'
import ContactForm from './ContactForm'

const fillOutValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
}

describe('ContactForm', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('has no accessibility violations', async () => {
        const { container } = render(<ContactForm />)

        expect(await axe(container)).toHaveNoViolations()
    })

    it('has no accessibility violations once validation errors are shown', async () => {
        const user = userEvent.setup()
        const { container } = render(<ContactForm />)

        await user.click(screen.getByRole('button', { name: /submit/i }))

        expect(await axe(container)).toHaveNoViolations()
    })

    it('shows an error for each empty field on submit and does not submit', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole('button', { name: /submit/i }))

        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription(`Can't be empty`)
        expect(screen.getByLabelText('Email')).toHaveAccessibleDescription(`Can't be empty`)
        expect(screen.getByLabelText('Message')).toHaveAccessibleDescription(`Can't be empty`)
        expect(fetch).not.toHaveBeenCalled()
    })

    it('rejects an invalid email address', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.type(screen.getByLabelText('Name'), 'Jane Doe')
        await user.type(screen.getByLabelText('Email'), 'not-an-email')
        await user.type(screen.getByLabelText('Message'), 'Hello there')
        await user.click(screen.getByRole('button', { name: /submit/i }))

        expect(screen.getByLabelText('Email')).toHaveAccessibleDescription(
            'Please use a valid email address',
        )
        expect(fetch).not.toHaveBeenCalled()
    })

    it('clears a field error when it regains focus', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole('button', { name: /submit/i }))
        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription(`Can't be empty`)

        await user.click(screen.getByLabelText('Name'))
        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription('')
    })

    it('submits to Formspree and resets the form on success', async () => {
        vi.mocked(fetch).mockResolvedValue({ ok: true } as Response)
        const user = userEvent.setup()
        render(<ContactForm />)

        const name = screen.getByLabelText('Name')
        const email = screen.getByLabelText('Email')
        const message = screen.getByLabelText('Message')

        await fillOutValidForm(user)
        await user.click(screen.getByRole('button', { name: /submit/i }))

        expect(fetch).toHaveBeenCalledWith(
            'https://formspree.io/f/xqpzveek',
            expect.objectContaining({ method: 'POST' }),
        )
        await waitFor(() => expect(name).toHaveValue(''))
        expect(email).toHaveValue('')
        expect(message).toHaveValue('')
        expect(screen.getByRole('status')).toHaveTextContent('Thanks! Your message has been sent.')
    })

    it('shows an error and preserves input when the request fails', async () => {
        vi.mocked(fetch).mockResolvedValue({ ok: false } as Response)
        const user = userEvent.setup()
        render(<ContactForm />)

        const name = screen.getByLabelText('Name')

        await fillOutValidForm(user)
        await user.click(screen.getByRole('button', { name: /submit/i }))

        await waitFor(() =>
            expect(screen.getByRole('status')).toHaveTextContent(/something went wrong/i),
        )
        expect(name).toHaveValue('Jane Doe')
    })
})
