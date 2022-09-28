function isSumEqual (firstWord: string, secondWord: string, targetWord: string): boolean {
    return word2Num(firstWord) + word2Num(secondWord) === word2Num(targetWord);
}

function word2Num (word:string):number {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        result = result * 10 + word.charCodeAt(i) - 97;
    }
    return result;
}
