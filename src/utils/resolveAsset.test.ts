import { describe, it, expect } from 'vitest'
import { resolveAsset } from './resolveAsset'

describe('resolveAsset', () => {
    it('returns the value for a key that exists in the glob map', () => {
        const glob = { './image-a.webp': '/assets/image-a-hash.webp' }

        expect(resolveAsset(glob, './image-a.webp')).toBe('/assets/image-a-hash.webp')
    })

    it('throws a descriptive error when the key is missing', () => {
        const glob = { './image-a.webp': '/assets/image-a-hash.webp' }

        expect(() => resolveAsset(glob, './missing.webp')).toThrow(
            'Asset not found: ./missing.webp',
        )
    })
})
