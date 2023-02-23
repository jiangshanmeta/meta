function smallestSubarrays (nums: number[]): number[] {
    const result = new Array<number>(nums.length);
    result[nums.length - 1] = 1;
    const numsBinary = nums.map(buildBinary);
    const or = [...numsBinary[numsBinary.length - 1], ];
    let right = nums.length - 1;

    for (let i = nums.length - 2; i > -1; i--) {
        for (let j = 0; j < 32; j++) {
            or[j] += numsBinary[i][j];
        }
        while (right > i) {
            let canRemove = true;
            for (let j = 0; j < 32; j++) {
                if (or[j] === 1 && numsBinary[right][j] === 1) {
                    canRemove = false;
                    break;
                }
            }
            if (canRemove) {
                for (let j = 0; j < 32; j++) {
                    or[j] -= numsBinary[right][j];
                }
                right--;
            } else {
                break;
            }
        }
        result[i] = right - i + 1;
    }

    return result;
}

function buildBinary (num:number) {
    const result = new Array<number>(32).fill(0);
    let index = 0;
    while (num) {
        result[index++] = num & 1;
        num >>= 1;
    }

    return result;
}
