const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b !== 0 ? a / b : NaN,
};

export default function calc(text) {
    text = text.trim();

    for (const op of ["+", "-", "*", "/"]) {
        const i = text.indexOf(op);
        if (i > 0) {
            const a = calc(text.slice(0, i));
            const b = calc(text.slice(i + 1));

            return operators[op](a, b);
        }
    }

    return Number(text || NaN);
}