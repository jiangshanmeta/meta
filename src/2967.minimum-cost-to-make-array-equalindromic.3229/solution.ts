function minimumCost (nums: number[]): number {
    nums.sort((a, b) => a - b);
    const m = nums[nums.length >> 1];
    let g = m;
    while (!is(`${g}`)) {
        g++;
    }
    let l = m;
    while (!is(`${l}`)) {
        l--;
    }
    return Math.min(calcCost(nums, l), calcCost(nums, g));
}

function calcCost (nums:number[], x:number) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += Math.abs(nums[i] - x);
    }
    return result;
}

function is (n:string) {
    let l = 0;
    let r = n.length - 1;
    while (l < r) {
        if (n[l++] !== n[r--]) {
            return false;
        }
    }
    return true;
}
