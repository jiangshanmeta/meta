function takeCharacters (s: string, k: number): number {
    let rA = 0;
    let rB = 0;
    let rC = 0;
    let right = s.length - 1;
    while (right > -1 && (rA < k || rB < k || rC < k)) {
        if (s[right] === 'a') {
            rA++;
        } else if (s[right] === 'b') {
            rB++;
        } else {
            rC++;
        }
        right--;
    }
    if (rA < k || rB < k || rC < k) {
        return -1;
    }

    right++;
    let result = s.length - right;
    let lA = 0;
    let lB = 0;
    let lC = 0;

    for (let left = 0; left < s.length; left++) {
        if (s[left] === 'a') {
            lA++;
        } else if (s[left] === 'b') {
            lB++;
        } else {
            lC++;
        }

        while (right < s.length && (rA + lA >= k && rB + lB >= k && rC + lC >= k)) {
            if (right > left) {
                result = Math.min(result, rA + rB + rC + lA + lB + lC);
            }

            if (s[right] === 'a') {
                rA--;
            } else if (s[right] === 'b') {
                rB--;
            } else {
                rC--;
            }

            right++;
        }

        if (rA + lA >= k && rB + lB >= k && rC + lC >= k) {
            result = Math.min(result, rA + rB + rC + lA + lB + lC);
        }
    }

    return result;
}
