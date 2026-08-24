import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
    it('shows an error for each empty field on submit and does not submit', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole('button', { name: /submit/i }))

        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription(`Can't be empty`)
        expect(screen.getByLabelText('Email')).toHaveAccessibleDescription(`Can't be empty`)
        expect(screen.getByLabelText('Message')).toHaveAccessibleDescription(`Can't be empty`)
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
    })

    it('clears a field error when it regains focus', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole('button', { name: /submit/i }))
        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription(`Can't be empty`)

        await user.click(screen.getByLabelText('Name'))
        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription('')
    })

    it('accepts valid input and resets the form', async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        const name = screen.getByLabelText('Name')
        const email = screen.getByLabelText('Email')
        const message = screen.getByLabelText('Message')

        await user.type(name, 'Jane Doe')
        await user.type(email, 'jane@example.com')
        await user.type(message, 'Hello there')
        await user.click(screen.getByRole('button', { name: /submit/i }))

        expect(name).toHaveValue('')
        expect(email).toHaveValue('')
        expect(message).toHaveValue('')
    })
})
