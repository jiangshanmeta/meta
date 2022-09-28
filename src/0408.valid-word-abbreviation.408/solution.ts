function validWordAbbreviation (word: string, abbr: string): boolean {
    let index1 = 0;
    let index2 = 0;
    while (index1 < word.length && index2 < abbr.length) {
        if (isDigit(abbr[index2]) && abbr[index2] !== '0') {
            const start = index2++;
            while (index2 < abbr.length && isDigit(abbr[index2])) {
                index2++;
            }
            const count = +abbr.slice(start, index2);
            index1 += count;
        } else {
            if (word[index1] === abbr[index2]) {
                index1++;
                index2++;
                continue;
            }
            return false;
        }
    }
    return index1 === word.length && index2 === abbr.length;
}

function isDigit (letter:string) {
    const code = letter.charCodeAt(0);
    return code > 47 && code < 58;
}
