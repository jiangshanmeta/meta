function canBeIncreasing (nums: number[]): boolean {
    let index = 1;
    while (index < nums.length) {
        if (nums[index] > nums[index - 1]) {
            index++;
            continue;
        } else if (nums[index] === nums[index - 1]) {
            index++;
            while (index < nums.length) {
                if (nums[index] <= nums[index - 1]) {
                    return false;
                }
                index++;
            }
            return true;
        }
        if (index === nums.length - 1) {
            return true;
        }

        const checkA = (index:number) => {
            if (nums[index] <= nums[index - 2]) {
                return false;
            }
            while (index < nums.length - 1) {
                if (nums[index] >= nums[index + 1]) {
                    return false;
                }
                index++;
            }
            return true;
        };
        const checkB = (index:number) => {
            if (nums[index] <= nums[index - 2]) {
                return false;
            }
            while (index < nums.length - 1) {
                if (nums[index] >= nums[index + 1]) {
                    return false;
                }
                index++;
            }
            return true;
        };

        return checkA(index) || checkB(index + 1);
    }
    return true;
}
