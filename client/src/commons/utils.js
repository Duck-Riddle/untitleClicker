export function matchHooks(item, effects) {
    return effects.reduce((prev, curr) => {
        if (item.__hooks__.some(r=>curr.hooks.indexOf(r) >= 0) && curr.active) {
            prev.push(curr)
        }
        return prev
    }, [])
}

export function sumEffects(effects) {
    return [
        effects.reduce((a, b) => a + (b['flat'] || 0), 0),
        effects.reduce((a, b) => a * (b['factor'] || 1), 1)
    ]
}

export function regexExcept(type, exceptions) {
    return new RegExp(`^${type}.*(?<!${exceptions.join(')$.*(?<!')})$`)
}

console.log(regexExcept("items", ["request", "update"]));