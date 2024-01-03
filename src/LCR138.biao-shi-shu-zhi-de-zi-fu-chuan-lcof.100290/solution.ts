function validNumber (s: string): boolean {
    s = s.trim();
    if (!s) {
        return false;
    }

    let hasDot = false;
    let hasNumber = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'e' || s[i] === 'E') {
            if (!hasNumber) {
                return false;
            }
            let hasENumber = false;
            let j = i + 1;
            while (j < s.length) {
                if (s[j] === '-' || s[j] === '+') {
                    if (j !== i + 1) {
                        return false;
                    }
                    j++;
                    continue;
                }
                const code = s.charCodeAt(j);
                if (code < 48 || code > 57) {
                    return false;
                }
                hasENumber = true;
                j++;
            }
            return hasENumber;
        }
        if ((s[i] === '+' || s[i] === '-')) {
            if (i !== 0) {
                return false;
            }
            continue;
        }
        if (s[i] === '.') {
            if (hasDot) {
                return false;
            }
            hasDot = true;
            continue;
        }
        const code = s.charCodeAt(i);

        if (code < 48 || code > 57) {
            return false;
        }
        hasNumber = true;
    }
    return hasNumber;
}
