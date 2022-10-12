function canThreePartsEqualSum (arr: number[]): boolean {
    const total = arr.reduce((sum, item) => sum + item, 0);
    // 目标是总和的1/3
    const target = total / 3;
    if (!Number.isInteger(target)) {
        return false;
    }
    // 时间复杂度是O(N) 因为有个break
    // i是第一部分的结尾 要找到最短的满足target的第一部分
    let sum = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        sum += arr[i];
        if (sum !== target) {
            continue;
        }
        sum = 0;
        // j是第二部分的结尾
        for (let j = i + 1; j < arr.length - 1; j++) {
            sum += arr[j];
            if (sum === target) {
                return true;
            }
        }
        // 注意这个break
        break;
    }

    return false;
}
