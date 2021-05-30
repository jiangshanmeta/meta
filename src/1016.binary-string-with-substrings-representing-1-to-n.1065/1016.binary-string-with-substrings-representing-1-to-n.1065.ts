function queryString (S: string, N: number): boolean {
    for (let i = (N >> 1) + 1; i <= N; i++) {
        if (!S.includes(i.toString(2))) {
            return false;
        }
    }
    return true;
}
