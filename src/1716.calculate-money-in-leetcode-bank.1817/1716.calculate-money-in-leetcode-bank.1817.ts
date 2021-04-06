function totalMoney (n: number): number {
    let result = 0;
    let money = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 1) {
            money = (i - 1) / 7 + 1;
        } else {
            money++;
        }
        result += money;
    }
    return result;
}
