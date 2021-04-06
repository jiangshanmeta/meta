function maxRepeating (sequence: string, word: string): number {
    let result = 0;
    let flag = true;
    while (flag) {
        if (sequence.includes(word.repeat(result + 1))) {
            result++;
        } else {
            flag = false;
        }
    }
    return result;
}
