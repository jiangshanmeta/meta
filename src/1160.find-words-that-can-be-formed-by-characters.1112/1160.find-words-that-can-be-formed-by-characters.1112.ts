function countCharacters (words: string[], chars: string): number {
    const counts1 = getCount(chars);
    return words.reduce((sum, word) => {
        const counts2 = getCount(word);
        for (let i = 0; i < 26; i++) {
            if (counts2[i] > counts1[i]) {
                return sum;
            }
        }
        return sum + word.length;
    }, 0);
}

function getCount (s:string):number[] {
    const result:number[] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        result[s.charCodeAt(i) - 97]++;
    }
    return result;
}
