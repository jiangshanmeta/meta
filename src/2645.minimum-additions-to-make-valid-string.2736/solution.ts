function addMinimum (word: string): number {
    let result = 0;
    let index = 0;
    while (index < word.length) {
        if (word[index] === 'a') {
            if (index + 1 < word.length && word[index + 1] === 'b') {
                if (index + 2 < word.length && word[index + 2] === 'c') {
                    index += 3;
                } else {
                    result++;
                    index += 2;
                }
            } else if (index + 1 < word.length && word[index + 1] === 'c') {
                result += 1;
                index += 2;
            } else {
                result += 2;
                index++;
            }
        } else if (word[index] === 'b') {
            if (index + 1 < word.length && word[index + 1] === 'c') {
                result++;
                index += 2;
            } else {
                result += 2;
                index++;
            }
        } else {
            result += 2;
            index++;
        }
    }
    return result;
}
