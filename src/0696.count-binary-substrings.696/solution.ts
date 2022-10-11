function countBinarySubstrings (s: string): number {
    let result = 0;
    let index = 1;
    let leftC = s[0];
    let leftCount = 1;
    while (index < s.length && s[index] === leftC) {
        leftCount++;
        index++;
    }

    let rightC = s[index];
    let rightCount = 0;
    while (index < s.length) {
        while (index < s.length && s[index] === rightC) {
            rightCount++;
            index++;
        }
        result += Math.min(leftCount, rightCount);
        leftC = rightC;
        leftCount = rightCount;
        rightCount = 0;
        rightC = index === s.length ? '' : s[index];
    }

    return result;
}
