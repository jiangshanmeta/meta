function largestRectangleArea (heights: number[]): number {
    let result = 0;
    const stack:number[] = [];
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            const index = stack.pop()!;
            const left = stack.length > 0 ? stack[stack.length - 1] : -1;
            result = Math.max(result, heights[index] * (i - left - 1));
        }
        stack.push(i);
    }
    for (let i = stack.length - 1; i > -1; i--) {
        const left = i > 0 ? stack[i - 1] : -1;
        result = Math.max(result, heights[stack[i]] * (heights.length - left - 1));
    }

    return result;
}
