function validPalindrome (s: string): boolean {
    return check(s, 0, s.length - 1, false);
}

function check (s:string, left:number, right:number, changed:boolean):boolean {
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
            continue;
        }
        if (changed) {
            return false;
        }
        return check(s, left + 1, right, true) || check(s, left, right - 1, true);
    }
    return true;
}
