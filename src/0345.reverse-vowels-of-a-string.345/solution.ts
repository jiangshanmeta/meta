function reverseVowels (s: string): string {
    const list = s.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isVowel(list[left])) {
            left++;
        }
        while (left < right && !isVowel(list[right])) {
            right--;
        }
        if (left < right) {
            const tmp = list[left];
            list[left++] = list[right];
            list[right--] = tmp;
        }
    }
    return list.join('');
}
const set = new Set<string>([
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U',
]);

function isVowel (c:string) {
    return set.has(c);
}
