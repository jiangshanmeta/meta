function minOperations (nums: number[]): number {
    if (nums.findIndex(item => item === 1) > -1) {
        return nums.filter(item => item !== 1).length;
    }
    if (GCD(nums) !== 1) {
        return -1;
    }

    let width = 1;
    let vals = [...nums, ];
    while (width < nums.length) {
        width++;
        const newVals:number[] = [];
        for (let i = 0; i < vals.length - 1; i++) {
            const data = gcd(vals[i], nums[i + width - 1]);
            if (data === 1) {
                return nums.length + width - 2;
            } else {
                newVals.push(data);
            }
        }
        vals = newVals;
    }

    return -1;
}

function GCD (args:number[]) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result = gcd(result, args[i]);
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
