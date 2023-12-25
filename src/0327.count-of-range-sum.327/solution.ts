function countRangeSum (nums: number[], lower: number, upper: number): number {
    const prefix = new Array<number>(nums.length + 1);
    prefix[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    const copy = new Array<number>(prefix.length);
    const mergeSort = (left:number, right:number):number => {
        if (right - left < 1) {
            return 0;
        }
        const mid = (left + right) >> 1;
        let res = 0;
        res += mergeSort(left, mid);
        res += mergeSort(mid + 1, right);
        let low = left;
        let high = left;
        for (let i = mid + 1; i <= right; i++) {
            while (low < mid + 1 && prefix[low] < prefix[i] - upper) {
                low++;
            }
            while (high < mid + 1 && prefix[high] <= prefix[i] - lower) {
                high++;
            }
            if (low < mid + 1) {
                res += high - low;
            }
        }

        for (let i = left; i <= right; i++) {
            copy[i] = prefix[i];
        }
        let index0 = left;
        let index1 = left;
        let index2 = mid + 1;
        while (index1 < mid + 1 && index2 < right + 1) {
            if (copy[index1] < copy[index2]) {
                prefix[index0++] = copy[index1++];
            } else {
                prefix[index0++] = copy[index2++];
            }
        }
        while (index1 < mid + 1) {
            prefix[index0++] = copy[index1++];
        }
        while (index2 < right + 1) {
            prefix[index0++] = copy[index2++];
        }

        return res;
    };

    return mergeSort(0, prefix.length - 1);
}
