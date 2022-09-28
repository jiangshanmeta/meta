function indexPairs (text: string, words: string[]): number[][] {
    function isMatch (word:string, index:number) {
        if (index + word.length > text.length) {
            return false;
        }
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== text[i + index]) {
                return false;
            }
        }
        return true;
    }
    words.sort((a, b) => a.length - b.length);
    const result:number[][] = [];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (isMatch(words[j], i)) {
                result.push([i, i + words[j].length - 1, ]);
            }
        }
    }
    return result;
}
