function maxConsecutive (bottom: number, top: number, special: number[]): number {
    special.sort((a, b) => a - b);
    let result = 0;
    let lastNormal = bottom;
    let index = 0;
    if (special[0] === lastNormal) {
        while (index + 1 < special.length && special[index + 1] === special[index] + 1) {
            index++;
        }
        lastNormal = special[index] + 1;
        index++;
    }
    while (index < special.length) {
        result = Math.max(result, special[index] - lastNormal);
        while (index + 1 < special.length && special[index + 1] === special[index] + 1) {
            index++;
        }
        lastNormal = special[index] + 1;
        index++;
    }
    result = Math.max(result, top - lastNormal + 1);
    return result;
}
