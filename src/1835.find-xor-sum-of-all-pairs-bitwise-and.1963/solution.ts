function getXORSum (arr1: number[], arr2: number[]): number {
    // (a&1)^(a&c) => a&(b^c)
    // 所以对于arr1的任意元素 其与 arr2中每一个元素&之后的xor值 为 arr2中所有元素xor值(记为xor2)&a
    // 于是转换为xor2 & arr1 的每一个元素 然后xor
    // 又回到了最开始的情况
    // 只需xor1&xor2即可
    let xors1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        xors1 ^= arr1[i];
    }
    let xors2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        xors2 ^= arr2[i];
    }
    return xors1 & xors2;
}
