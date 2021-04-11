/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords (s: string[]): void {
    let left = 0;
    let index = 1;
    while (index < s.length) {
        while (index < s.length && s[index] !== ' ') {
            index++;
        }
        reverse(s, left, index - 1);
        index++;
        left = index;
    }
    reverse(s, 0, s.length - 1);
}

function reverse (s:string[], left:number, right:number) {
    while (left < right) {
        const tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
    }
}
