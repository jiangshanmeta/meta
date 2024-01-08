function canSeePersonsCount (heights: number[]): number[] {
    const stack = [heights[heights.length - 1], ];
    const results = new Array<number>(heights.length).fill(0);
    for (let i = heights.length - 2; i > -1; i--) {
        if (heights[i] >= stack[0]) {
            results[i] = stack.length;
        } else {
            let low = 0;
            let high = stack.length - 1;
            let index = 0;
            while (low <= high) {
                const mid = (low + high) >> 1;
                if (stack[mid] >= heights[i]) {
                    index = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            results[i] = stack.length - index;
        }
        while (stack.length && heights[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        stack.push(heights[i]);
    }
    return results;
}
