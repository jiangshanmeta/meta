function findBuildings (heights: number[]): number[] {
    const result:number[] = [];
    let rightMax = heights[heights.length - 1];
    result.push(heights.length - 1);
    for (let i = heights.length - 2; i > -1; i--) {
        if (heights[i] > rightMax) {
            result.push(i);
            rightMax = heights[i];
        }
    }
    return result.reverse();
}
