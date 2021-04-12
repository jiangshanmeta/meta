function shortestWordDistance (wordsDict: string[], word1: string, word2: string): number {
    if (word1 === word2) {
        let index = -1;
        let result = wordsDict.length;
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] !== word1) {
                continue;
            }

            if (index === -1) {
                index = i;
                continue;
            }

            result = Math.min(result, i - index);
            index = i;
        }
        return result;
    } else {
        let index1 = -1;
        let index2 = -1;
        let result = wordsDict.length;
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] === word1) {
                if (index2 !== -1) {
                    result = Math.min(result, i - index2);
                }
                index1 = i;
            } else if (wordsDict[i] === word2) {
                if (index1 !== -1) {
                    result = Math.min(result, i - index1);
                }
                index2 = i;
            }
        }
        return result;
    }
}
