
function stableMountains (height: number[], threshold: number): number[] {
    const result:number[] = [];
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > threshold) {
            result.push(i);
        }
    }
    return result;
}
