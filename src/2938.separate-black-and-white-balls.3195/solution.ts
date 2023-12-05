function minimumSteps (s: string): number {
    let result = 0;
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && s[left] !== '1') {
            left++;
        }
        while (left < right && s[right] !== '0') {
            right--;
        }
        if (left < right) {
            result += right - left;
            left++;
            right--;
        }
    }
    return result;
}
