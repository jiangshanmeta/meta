function closetTarget (words: string[], target: string, startIndex: number): number {
    if (words[startIndex] === target) {
        return 0;
    }
    const n = words.length;
    let left = (startIndex - 1 + n) % n;
    let right = (startIndex + 1) % n;
    let dis = 1;
    while (dis <= n / 2) {
        if (words[left] === target || words[right] === target) {
            return dis;
        }
        dis++;
        left = (left - 1 + n) % n;
        right = (right + 1) % n;
    }
    return -1;
}
