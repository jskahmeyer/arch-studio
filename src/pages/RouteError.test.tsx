import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import RouteError from './RouteError'

const ThrowingComponent = () => {
    throw new Error('boom')
}

describe('RouteError', () => {
    it('renders a fallback with a link home when a route throws', async () => {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

        const router = createMemoryRouter(
            [{ path: '/', element: <ThrowingComponent />, errorElement: <RouteError /> }],
            { initialEntries: ['/'] },
        )

        render(<RouterProvider router={router} />)

        expect(await screen.findByText('Something went wrong')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/')

        consoleErrorSpy.mockRestore()
    })

    it('shows the response status when a route throws a Response (e.g. from a loader)', async () => {
        const router = createMemoryRouter(
            [
                {
                    path: '/',
                    element: <div />,
                    loader: () => {
                        throw new Response(null, { status: 404, statusText: 'Not Found' })
                    },
                    errorElement: <RouteError />,
                },
            ],
            { initialEntries: ['/'] },
        )

        render(<RouterProvider router={router} />)

        expect(await screen.findByText('404 Not Found')).toBeInTheDocument()
    })
})
