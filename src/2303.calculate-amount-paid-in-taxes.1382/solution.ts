function calculateTax (brackets: number[][], income: number): number {
    brackets.push([Infinity, brackets[brackets.length - 1][1], ]);
    let result = 0;
    let base = 0;
    for (const [upper, percent, ] of brackets) {
        if (income <= base) {
            break;
        }
        result += (Math.min(upper, income) - base) * percent / 100;
        base = upper;
    }

    return result;
}
