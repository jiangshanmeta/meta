function minimumLength (s: string): number {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const cLeft = s[left];
        const cRight = s[right];
        if (cLeft !== cRight) {
            break;
        }
        left++;
        right--;
        while (left <= right && s[left] === cLeft) {
            left++;
        }
        while (left <= right && s[right] === cRight) {
            right--;
        }
    }
    if (left > right) {
        return 0;
    }
    return right - left + 1;
}
