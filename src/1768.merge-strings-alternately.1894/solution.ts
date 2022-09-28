function mergeAlternately (word1: string, word2: string): string {
    const result:string[] = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < word1.length && index2 < word2.length) {
        result.push(word1[index1++]);
        result.push(word2[index2++]);
    }
    if (index1 < word1.length) {
        result.push(word1.slice(index1));
    } else if (index2 < word2.length) {
        result.push(word2.slice(index2));
    }
    return result.join('');
}
