// 连续的两个1 执行加操作更有力

function minOperations (n: number): number {
    let consiveOneCount = 0;
    let offset = 0;
    let copy = n;
    let result = 0;
    while (copy > 0) {
        if (copy & 1) {
            consiveOneCount++;
            if (consiveOneCount > 1) {
                n += (1 << (offset - 1));
                consiveOneCount = 0;
                copy = n >> offset;
                result++;
            }
        } else {
            consiveOneCount = 0;
        }
        copy >>= 1;
        offset++;
    }

    while (n) {
        n = n & (n - 1);
        result++;
    }
    return result;
}
