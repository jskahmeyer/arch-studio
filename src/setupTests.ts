import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement matchMedia; stub it so components that check
// prefers-reduced-motion (etc.) don't crash under test.
window.matchMedia ??= (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
})
