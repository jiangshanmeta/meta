function leftmostBuildingQueries (heights: number[], queries: number[][]): number[] {
    const queries2 = queries.map((item, index) => {
        return {
            item: [Math.min(item[0], item[1]), Math.max(item[0], item[1]), ],
            index,
        };
    }).sort((a, b) => b.item[1] - a.item[1]);
    const result = new Array<number>(queries.length);
    const stack:number[] = [];
    const indexs:number[] = [];
    let needHandleIndex = heights.length - 1;

    for (const query of queries2) {
        const {
            item: [a, b, ],
            index,
        } = query;

        if (a === b || heights[b] > heights[a]) {
            result[index] = b;
            continue;
        }
        while (needHandleIndex > b) {
            while (stack.length && heights[needHandleIndex] >= stack[stack.length - 1]) {
                stack.pop();
                indexs.pop();
            }
            stack.push(heights[needHandleIndex]);
            indexs.push(needHandleIndex--);
        }

        let low = 0;
        let high = stack.length - 1;
        let res = -1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (stack[mid] > heights[a]) {
                res = indexs[mid];
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        result[index] = res;
    }
    return result;
}
