function longestWPI (hours: number[]): number {
    const sums = [0, ];
    for (let i = 0; i < hours.length; i++) {
        sums[i + 1] = sums[i] + (hours[i] > 8 ? 1 : -1);
    }
    const stack = [0, ];
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] < sums[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }
    let result = 0;
    for (let i = sums.length - 1; i > 0; i--) {
        while (stack.length && stack[stack.length - 1] >= i) {
            stack.pop();
        }
        while (stack.length && sums[stack[stack.length - 1]] < sums[i]) {
            result = Math.max(result, i - stack.pop());
        }
    }
    return result;
}
