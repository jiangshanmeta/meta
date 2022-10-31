function oddString (words: string[]): string {
    const F = toDiffStr(words[0]);
    const L = toDiffStr(words[words.length - 1]);
    if (F !== L) {
        const S = toDiffStr(words[1]);
        if (S === F) {
            return words[words.length - 1];
        }
        return words[0];
    } else {
        for (let i = 1; i < words.length - 1; i++) {
            const S = toDiffStr(words[i]);
            if (S !== F) {
                return words[i];
            }
        }
    }
    return '';
}

function toDiffStr (word:string) {
    const result:number[] = [];
    let last = word.charCodeAt(0);
    for (let i = 1; i < word.length; i++) {
        const code = word.charCodeAt(i);
        result.push(code - last);
        last = code;
    }

    return result.join(' ');
}
