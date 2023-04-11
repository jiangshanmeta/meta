function diagonalPrime (nums: number[][]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i][i])) {
            result = Math.max(result, nums[i][i]);
        }
        if (isPrime(nums[i][nums.length - i - 1])) {
            result = Math.max(result, nums[i][nums.length - i - 1]);
        }
    }
    return result;
}

function isPrime (num:number) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
