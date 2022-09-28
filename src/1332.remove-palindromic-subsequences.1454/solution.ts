function removePalindromeSub (s: string): number {
    if (s.length === 0) {
        return 0;
    }
    let hasA = false;
    let hasB = false;
    let left = 0;
    let right = s.length - 1;
    let isPalindrome = true;
    while (left <= right) {
        if (s[left] === 'a') {
            hasA = true;
        } else {
            hasB = true;
        }
        if (s[right] === 'a') {
            hasA = true;
        } else {
            hasB = true;
        }
        if (s[left++] !== s[right--]) {
            isPalindrome = false;
        }
    }

    if (isPalindrome) {
        return 1;
    }

    if (hasA && hasB) {
        return 2;
    } else {
        return 1;
    }
}
