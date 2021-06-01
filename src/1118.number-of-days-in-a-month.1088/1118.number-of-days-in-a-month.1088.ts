function numberOfDays (Y: number, M: number): number {
    if (M !== 2) {
        const map = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
        return map[M - 1];
    } else {
        const isLeapYear = (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
        if (isLeapYear) {
            return 29;
        } else {
            return 28;
        }
    }
}
