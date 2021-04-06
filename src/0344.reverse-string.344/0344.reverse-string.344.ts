/**
 Do not return anything, modify s in-place instead.
 */
function reverseString (s: string[]): void {
    let left = 0;
    let right:number = s.length - 1;
    while (left < right) {
        const tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
}
