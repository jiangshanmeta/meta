function countValidWords (sentence: string): number {
    const list = sentence.split(' ');
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        if (!list[i]) {
            continue;
        }
        if (isValidWord(list[i])) {
            result++;
        }
    }
    return result;
}

function isValidWord (word:string):boolean {
    let hasLineThrough = false;
    let hasWordAfterLineThrough = false;
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if (code > 47 && code < 58) {
            return false;
        } else if (word[i] === '-') {
            if (hasLineThrough || i === 0) {
                return false;
            }
            hasLineThrough = true;
        } else if (['!', '.', ',', ].includes(word[i])) {
            if (i !== word.length - 1) {
                return false;
            }
        } else if (hasLineThrough) {
            hasWordAfterLineThrough = true;
        }
    }
    return !hasLineThrough || hasWordAfterLineThrough;
}
