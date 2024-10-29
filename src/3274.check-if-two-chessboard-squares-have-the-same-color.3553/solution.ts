function checkTwoChessboards (coordinate1: string, coordinate2: string): boolean {
    const r1 = coordinate1.charCodeAt(0) - 96;
    const c1 = coordinate1.charCodeAt(1) - 48;
    const r2 = coordinate2.charCodeAt(0) - 96;
    const c2 = coordinate2.charCodeAt(1) - 48;

    const isBlack1 = r1 % 2 === c1 % 2;
    const isBlack2 = r2 % 2 === c2 % 2;

    return isBlack1 === isBlack2;
}
