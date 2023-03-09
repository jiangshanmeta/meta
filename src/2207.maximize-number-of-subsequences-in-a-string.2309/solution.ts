function maximumSubsequenceCount (text: string, pattern: string): number {
    if (pattern[0] === pattern[1]) {
        let result = 0;
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === pattern[0]) {
                result += count;
                count++;
            }
        }
        return result + count;
    }

    let result = 0;
    let first = 0;
    let second = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === pattern[0]) {
            first++;
        } else if (text[i] === pattern[1]) {
            result += first;
            second++;
        }
    }
    return result + Math.max(first, second);
}
