const candidates = [
    1, 9, 10, 36, 45, 55,
    82, 91, 99, 100, 235, 297,
    369, 370, 379, 414, 657, 675,
    703, 756, 792, 909, 918, 945,
    964, 990, 991, 999, 1000,
];

export function punishmentNumber (n: number): number {
    let result = 0;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] > n) {
            break;
        }
        result += candidates[i] ** 2;
    }
    return result;
}
