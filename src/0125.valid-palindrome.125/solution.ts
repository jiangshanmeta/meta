function isPalindrome (s: string): boolean {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isValid(s[left])) {
            left++;
        }
        while (left < right && !isValid(s[right])) {
            right--;
        }
        if (left < right && s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isValid (char:string):boolean {
    const code = char.charCodeAt(0);
    return (code > 96 && code < 123) || (code > 47 && code < 58);
}
