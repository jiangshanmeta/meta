function findMinimumOperations (s1: string, s2: string, s3: string): number {
    if (s1[0] !== s2[0] || s2[0] !== s3[0]) {
        return -1;
    }
    const MAX_INDEX = Math.min(s1.length, s2.length, s3.length);
    let index = 0;
    while (index < MAX_INDEX && s1[index] === s2[index] && s2[index] === s3[index]) {
        index++;
    }

    return s1.length + s2.length + s3.length - 3 * index;
}
