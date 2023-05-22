function makeSmallestPalindrome (s: string): string {
    const result = s.split('');
    let left = 0;
    let right = result.length - 1;
    while (left < right) {
        if (result[left] !== result[right]) {
            const l = result[left];
            const r = result[right];
            if (l < r) {
                result[right] = l;
            } else {
                result[left] = r;
            }
        }
        left++;
        right--;
    }

    return result.join('');
}
