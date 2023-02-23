function canReach (s: string, minJump: number, maxJump: number): boolean {
    const flags = new Array<boolean>(s.length).fill(false);
    flags[0] = true;
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' || !flags[i]) {
            continue;
        }
        left = Math.max(left, i + minJump);
        if (left >= s.length) {
            break;
        }
        right = Math.min(Math.max(right, i + maxJump), s.length - 1);

        while (left <= right) {
            if (s[left] === '1') {
                left++;
                continue;
            }
            flags[left++] = true;
        }
    }
    return flags[flags.length - 1];
}
