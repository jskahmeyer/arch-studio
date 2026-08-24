/**
 * Look up a key in an eagerly-resolved `import.meta.glob` map, throwing a
 * clear error instead of silently returning `undefined` if the expected
 * asset is missing. A miss here means the source data (JSON content, a
 * filename prop) references a file that doesn't exist in the glob's
 * directory — a real bug, not a case to render around.
 */
export function resolveAsset(glob: Record<string, string>, key: string): string {
    const asset = glob[key]
    if (asset === undefined) {
        throw new Error(`Asset not found: ${key}`)
    }
    return asset
}
