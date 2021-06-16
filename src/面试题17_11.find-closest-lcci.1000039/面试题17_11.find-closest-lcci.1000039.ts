function findClosest (words: string[], word1: string, word2: string): number {
    let index1 = -1;
    let index2 = -1;
    let result = words.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            index1 = i;
            if (index2 !== -1) {
                result = Math.min(result, i - index2);
            }
        } else if (words[i] === word2) {
            index2 = i;
            if (index1 !== -1) {
                result = Math.min(result, i - index1);
            }
        }
    }
    return result;
}
