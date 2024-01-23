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

function multiSearch (big: string, smalls: string[]): number[][] {
    return smalls.map((pattern) => {
        if (!pattern) {
            return [];
        }
        return search(big, pattern);
    });
}
