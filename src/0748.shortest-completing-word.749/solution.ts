function shortestCompletingWord (licensePlate: string, words: string[]): string {
    const targetCount = countWord(licensePlate);
    let result = '';
    for (const word of words) {
        if (result && word.length >= result.length) {
            continue;
        }

        if (!match(targetCount, countWord(word))) {
            continue;
        }
        if (result === '' || word.length < result.length) {
            result = word;
        }
    }

    return result;
}

function countWord (s:string) {
    const result = new Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code > 64 && code < 91) {
            result[code - 65]++;
        } else if (code > 96) {
            result[code - 97]++;
        }
    }
    return result;
}

function match (target:number[], current:number[]) {
    return current.every((item, index) => item >= target[index]);
}
