function calculateMaxMatchLengths (pattern:string) {
    const maxMatchLengths = new Array<number>(pattern.length).fill(0);
    let maxLength = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (maxLength > 0 && pattern[maxLength] !== pattern[i]) {
            maxLength = maxMatchLengths[maxLength - 1];
        }

        if (pattern[maxLength] === pattern[i]) {
            maxLength++;
        }
        maxMatchLengths[i] = maxLength;
    }
    return maxMatchLengths;
}

function search (text:string, pattern:string) {
    const positions:number[] = [];
    const maxMatchLengths = calculateMaxMatchLengths(pattern);
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        while (count > 0 && pattern[count] !== text[i]) {
            count = maxMatchLengths[count - 1];
        }
        if (pattern[count] === text[i]) {
            count++;
        }
        if (count === pattern.length) {
            positions.push(i - pattern.length + 1);
            count = maxMatchLengths[count - 1];
        }
    }
    return positions;
}

function beautifulIndices (s: string, a: string, b: string, k: number): number[] {
    const indexsA = search(s, a);

    if (indexsA.length === 0) {
        return [];
    }
    const indexsB = search(s, b);

    if (indexsB.length === 0) {
        return [];
    }
    let left = 0;
    const result:number[] = [];
    for (const index of indexsA) {
        while (left < indexsB.length) {
            if (indexsB[left] <= index && indexsB[left] < index - k) {
                left++;
            } else {
                break;
            }
        }

        if (left === indexsB.length) {
            break;
        }

        if (Math.abs(index - indexsB[left]) <= k) {
            result.push(index);
        }
    }
    return result;
}
