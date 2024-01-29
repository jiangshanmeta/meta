function maximumLength (nums: number[]): number {
    let max = nums[0];
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let maxPow = 0;

    let maxItem = max;
    if (map.has(1)) {
        maxPow = (map.get(1)! - 1) >> 1;
        maxItem = Math.pow(max, 1 / (2 ** maxPow));
    }

    nums = [...new Set(nums), ].sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            continue;
        }
        if (nums[i] > maxItem) {
            break;
        }
        let item = nums[i];
        let pow = 0;

        while (true) {
            if (map.has(item)) {
                const c = map.get(item)!;
                if (c === 1) {
                    if (pow > maxPow) {
                        maxPow = pow;
                        maxItem = Math.pow(max, 1 / (2 ** maxPow));
                    }
                    break;
                } else {
                    item *= item;
                    pow++;
                }
            } else {
                if (pow > 0) {
                    pow--;
                    if (pow > maxPow) {
                        maxPow = pow;
                        maxItem = Math.pow(max, 1 / (2 ** maxPow));
                    }
                }
                break;
            }
        }
    }

    return 2 * maxPow + 1;
}
