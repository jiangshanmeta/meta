function maxNumOfMarkedIndices (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = nums.length >> 1;
    const marked = new Array<boolean>(nums.length);
    let result = 0;

    while (i < nums.length) {
        if (marked[i]) {
            i++;
            continue;
        }

        while (j < nums.length && nums[i] * 2 > nums[j]) {
            j++;
        }
        if (j < nums.length) {
            result += 2;
            marked[i++] = true;
            marked[j++] = true;
        } else {
            break;
        }
    }
    return result;
}
