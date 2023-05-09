function colorTheArray (n: number, queries: number[][]): number[] {
    const marks = new Array<number>(n).fill(0);
    let total = 0;
    return queries.map(([index, color, ]) => {
        if (marks[index] === color) {
            return total;
        }
        // in each query, we only need to care about the changed position
        const oldRightMatch = Number(marks[index] !== 0 && index + 1 < n && marks[index] === marks[index + 1]);
        const oldLeftMatch = Number(marks[index] !== 0 && index > 0 && marks[index - 1] === marks[index]);

        marks[index] = color;

        const newRightMatch = Number(marks[index] !== 0 && index + 1 < n && marks[index] === marks[index + 1]);
        const newLeftMatch = Number(marks[index] !== 0 && index > 0 && marks[index - 1] === marks[index]);

        total += newRightMatch + newLeftMatch - oldRightMatch - oldLeftMatch;

        return total;
    });
}
