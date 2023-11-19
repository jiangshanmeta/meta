function isGood (nums: number[]): boolean {
    const N = nums.length - 1;
    const counts = new Array<number>(N).fill(0);
    for (const num of nums) {
        if (num > N || num < 1) {
            return false;
        }
        const index = num - 1;
        if (num !== N && counts[index] === 1) {
            return false;
        }
        if (num === N && counts[index] === 2) {
            return false;
        }
        counts[index]++;
    }
    return true;
}
