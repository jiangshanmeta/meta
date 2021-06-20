function checkZeroOnes (s: string): boolean {
    let index = 0;
    let maxLength0 = 0;
    let maxLength1 = 0;
    while (index < s.length) {
        let length1 = 0;
        let length0 = 0;
        while (index < s.length && s[index] === '0') {
            length0++;
            index++;
        }
        while (index < s.length && s[index] === '1') {
            length1++;
            index++;
        }
        maxLength0 = Math.max(maxLength0, length0);
        maxLength1 = Math.max(maxLength1, length1);
    }
    return maxLength1 > maxLength0;
}
