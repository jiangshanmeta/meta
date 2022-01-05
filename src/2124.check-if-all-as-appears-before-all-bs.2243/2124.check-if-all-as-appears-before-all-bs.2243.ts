function checkString (s: string): boolean {
    let hasB = false;
    for (const c of s) {
        if (c === 'b') {
            hasB = true;
        } else if (hasB) {
            return false;
        }
    }
    return true;
}
