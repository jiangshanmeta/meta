function strongPasswordCheckerII (password: string): boolean {
    if (password.length < 8) {
        return false;
    }
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    const specialSet = new Set('!@#$%^&*()-+');
    let hasSpecial = false;
    let last = '';
    for (const char of password) {
        if (char === last) {
            return false;
        }
        last = char;
        const code = char.charCodeAt(0);
        if (code > 96 && code < 123) {
            hasLower = true;
        } else if (code > 64 && code < 91) {
            hasUpper = true;
        } else if (code > 47 && code < 58) {
            hasNum = true;
        } else if (specialSet.has(char)) {
            hasSpecial = true;
        }
    }
    return hasUpper && hasLower && hasNum && hasSpecial;
}
