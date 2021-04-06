function searchRange (nums: number[], target: number): number[] {
    let left1 = 0;
    let right2 = nums.length - 1;
    while (left1 <= right2) {
        const mid = left1 + ((right2 - left1) >> 1);
        if (nums[mid] < target) {
            left1 = mid + 1;
        } else if (nums[mid] > target) {
            right2 = mid - 1;
        } else {
            let right1 = mid - 1;
            let left2 = mid + 1;
            let low = mid;
            let high = mid;
            while (left1 <= right1) {
                const mid1 = left1 + ((right1 - left1) >> 1);
                if (nums[mid1] < target) {
                    left1 = mid1 + 1;
                } else {
                    low = Math.min(low, mid1);
                    right1 = mid1 - 1;
                }
            }
            while (left2 <= right2) {
                const mid2 = left2 + ((right2 - left2) >> 1);
                if (nums[mid2] > target) {
                    right2 = mid2 - 1;
                } else {
                    high = Math.max(high, mid2);
                    left2 = mid2 + 1;
                }
            }
            return [low, high, ];
        }
    }
    return [-1, -1, ];
}
