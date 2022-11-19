function subarrayGCD (nums: number[], k: number): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === k) {
            result++;
        }
        for (let j = i + 1; j < nums.length; j++) {
            num = gcd(num, nums[j]);
            if (num < k) {
                break;
            } else if (num === k) {
                result++;
            }
        }
    }

    return result;
}

function gcd (a:number, b:number) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
