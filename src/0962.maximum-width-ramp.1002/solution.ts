function maxWidthRamp (A: number[]): number {
    const stack = [0, ];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }
    let result = 0;
    for (let i = A.length - 1; i > 0; i--) {
        while (stack.length && stack[stack.length - 1] >= i) {
            stack.pop();
        }
        while (stack.length && A[stack[stack.length - 1]] <= A[i]) {
            result = Math.max(result, i - stack.pop());
        }
    }
    return result;
}
