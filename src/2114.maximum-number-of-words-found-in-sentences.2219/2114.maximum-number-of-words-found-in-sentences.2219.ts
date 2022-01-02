function mostWordsFound (sentences: string[]): number {
    return Math.max(...sentences.map(calc));
}

function calc (sentence:string) {
    let result = 1;
    for (const char of sentence) {
        if (char === ' ') {
            result++;
        }
    }
    return result;
}
