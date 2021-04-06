function findNumbers (nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (isEvenCount(nums[i])) {
            result++;
        }
    }
    return result;
}

function isEvenCount (num:number):boolean {
    let count = 0;
    while (num > 0) {
        count++;
        num = (num - num % 10) / 10;
    }
    return count % 2 === 0;
}
