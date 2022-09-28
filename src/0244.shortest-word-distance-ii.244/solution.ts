class WordDistance {
    map:Map<string, number[]>
    constructor (wordsDict: string[]) {
        this.map = new Map<string, number[]>();
        for (let i = 0; i < wordsDict.length; i++) {
            if (!this.map.has(wordsDict[i])) {
                this.map.set(wordsDict[i], []);
            }
            this.map.get(wordsDict[i]).push(i);
        }
    }

    shortest (word1: string, word2: string): number {
        const indexs1 = this.map.get(word1);
        const indexs2 = this.map.get(word2);

        let i = 0;
        let j = 0;
        let result = Infinity;
        while (i < indexs1.length && j < indexs2.length) {
            if (indexs1[i] < indexs2[j]) {
                result = Math.min(result, indexs2[j] - indexs1[i]);
                i++;
            } else {
                result = Math.min(result, indexs1[i] - indexs2[j]);
                j++;
            }
        }
        return result;
    }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
