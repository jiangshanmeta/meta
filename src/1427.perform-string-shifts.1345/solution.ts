function stringShift (s: string, shift: number[][]): string {
    let diffs = 0;
    for (const [dir, offset, ] of shift) {
        if (dir === 1) {
            diffs += offset;
        } else {
            diffs -= offset;
        }
    }
    diffs %= s.length;
    if (diffs < 0) {
        diffs += s.length;
    }
    return `${s.slice(s.length - diffs)}${s.slice(0, s.length - diffs)}`;
}
