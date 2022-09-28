function numSmallerByFrequency (queries: string[], words: string[]): number[] {
    const counts:number[] = new Array(12).fill(0);
    for (let i = 0; i < words.length; i++) {
        counts[calc(words[i])]++;
    }
    for (let i = counts.length - 2; i > 0; i--) {
        counts[i] += counts[i + 1];
    }

    return queries.map((q) => {
        return counts[calc(q) + 1];
    });
}

function calc (str:string):number {
    const counts:number[] = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        counts[str.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (counts[i] > 0) {
            return counts[i];
        }
    }
    return 0;
}
