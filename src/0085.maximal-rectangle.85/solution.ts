function maximalRectangle (matrix: string[][]): number {
    const M = matrix.length;
    const N = matrix[0].length;
    const heights = new Array<number>(N).fill(0);
    let result = 0;
    for (let i = 0; i < M; i++) {
        const stack:number[] = [];
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === '0') {
                heights[j] = 0;
            } else {
                heights[j]++;
            }

            while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
                const index = stack.pop()!;
                const left = stack.length > 0 ? stack[stack.length - 1] : -1;
                result = Math.max(result, heights[index] * (j - left - 1));
            }
            stack.push(j);
        }

        for (let j = stack.length - 1; j > -1; j--) {
            const left = j > 0 ? stack[j - 1] : -1;
            result = Math.max(result, heights[stack[j]] * (N - left - 1));
        }
    }

    return result;
}
