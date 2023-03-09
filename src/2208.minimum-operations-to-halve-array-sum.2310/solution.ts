function halveArray (nums: number[]): number {
    heapify(nums);
    const sum = nums.reduce((acc, item) => acc + item, 0);
    let half = sum / 2;

    let result = 0;
    while (half > 0) {
        result++;
        const item = nums[0] / 2;

        half -= item;
        nums[0] = item;
        sideDown(nums, 0);
    }
    return result;
}

function swap (nums:number[], i:number, j:number) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

function sideDown (nums:number[], index:number) {
    while (2 * index + 1 < nums.length) {
        let childIndex = 2 * index + 1;
        if (childIndex + 1 < nums.length && nums[childIndex + 1] > nums[childIndex]) {
            childIndex++;
        }
        if (nums[childIndex] > nums[index]) {
            swap(nums, index, childIndex);
            index = childIndex;
        } else {
            break;
        }
    }
}

function heapify (nums:number[]) {
    for (let i = (nums.length - 2) >> 1; i > -1; i--) {
        sideDown(nums, i);
    }
}
