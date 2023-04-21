type Fn = (accum: number, curr: number) => number

function reduce (nums: number[], fn: Fn, init: number): number {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
}
