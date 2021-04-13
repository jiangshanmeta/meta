function isStrobogrammatic (num: string): boolean {
    const map = new Map<string, string>([
        ['0', '0', ],
        ['1', '1', ],
        ['6', '9', ],
        ['8', '8', ],
        ['9', '6', ],
    ]);

    let left = 0;
    let right = num.length - 1;
    while (left < right) {
        if (!map.has(num[left]) || num[right] !== map.get(num[left])) {
            return false;
        }
        left++;
        right--;
    }
    if (left === right) {
        return num[left] === '0' || num[left] === '1' || num[left] === '8';
    }
    return true;
}
