var isValid = function (s) {
    const stack = [];
    for (let char of s) {
        if (char == "(" || char == "{" || char === "[") {
            stack.push(char)
        } else {
            if (stack.length == 0) return false
            const last = stack.pop()
            if ((char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')) return false
        }
    }
    return stack.length === 0
};
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([{}])"))