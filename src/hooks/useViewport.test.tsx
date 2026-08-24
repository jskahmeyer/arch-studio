import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useViewport from './useViewport'

describe('useViewport', () => {
    it('returns the current window dimensions', () => {
        const { result } = renderHook(() => useViewport())

        expect(result.current.width).toBe(window.innerWidth)
        expect(result.current.height).toBe(window.innerHeight)
    })

    it('updates when the window is resized', () => {
        const { result } = renderHook(() => useViewport())

        act(() => {
            window.innerWidth = 500
            window.innerHeight = 800
            window.dispatchEvent(new Event('resize'))
        })

        expect(result.current.width).toBe(500)
        expect(result.current.height).toBe(800)
    })
})
