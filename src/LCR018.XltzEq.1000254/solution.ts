function isPalindrome (s: string): boolean {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!isValidCode(s.charCodeAt(left))) {
            left++;
            continue;
        }
        if (!isValidCode(s.charCodeAt(right))) {
            right--;
            continue;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isValidCode (code:number) {
    return (code > 47 && code < 58) || (code > 96 && code < 123);
}
