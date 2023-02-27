function waysToBuyPensPencils (total: number, cost1: number, cost2: number): number {
    let result = 0;
    let a = 0;
    let rest = total;
    while (a <= total) {
        result += Math.floor(rest / cost2) + 1;
        a += cost1;
        rest -= cost1;
    }
    return result;
}
