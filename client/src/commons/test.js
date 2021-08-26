

function regexExcept(type, exceptions) {
    return new RegExp(`^${type}.*(?<!${exceptions.join(')$.*(?<!')})$`)
}

console.log(regexExcept("items", ["request", "update"]));