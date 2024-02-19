function minimumTimeToInitialState(word: string, k: number): number {
    const next = new Array<number>(word.length).fill(0);
    let count = 0;
    for (let i = 1; i < word.length; i++) {
        while (count > 0 && word[count] !== word[i]) {
            count = next[count - 1];
        }
        if (word[count] === word[i]) {
            count++;
        }

        next[i] = count;
    }

    let length = next[next.length - 1];
    while (length > 0) {
        const rest = word.length - length;
        if (rest % k === 0) {
            return rest / k;
        }
        length = next[length - 1];
    }

    return Math.ceil(word.length / k)
};