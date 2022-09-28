function areOccurrencesEqual (s: string): boolean {
    const counts:number[] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    let index = 0;
    let frequency = 0;
    while (index < 26) {
        if (counts[index]) {
            frequency = counts[index++];
            break;
        } else {
            index++;
        }
    }
    while (index < 26) {
        if (counts[index] === 0) {
            index++;
            continue;
        }
        if (counts[index] !== frequency) {
            return false;
        }
        index++;
    }
    return true;
}
