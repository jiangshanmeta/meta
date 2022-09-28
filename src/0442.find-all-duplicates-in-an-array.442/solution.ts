function findDuplicates (nums: number[]): number[] {
    const result:number[] = [];
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === 0 || nums[index] === index + 1) {
            index++;
            continue;
        }
        if (nums[nums[index] - 1] === nums[index]) {
            result.push(nums[index]);
            nums[index++] = 0;
        } else {
            swap(nums, index, nums[index] - 1);
        }
    }
    return result;
}

function swap<T> (arr:T[], i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
