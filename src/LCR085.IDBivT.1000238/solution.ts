function generateParenthesis (n: number): string[] {
    const result:string[] = [];
    function backTracking (l:number, r:number, current:string) {
        if (l === 0 && r === 0) {
            result.push(current);
            return;
        }
        if (l > 0) {
            backTracking(l - 1, r, current + '(');
        }
        if (r > l) {
            backTracking(l, r - 1, current + ')');
        }
    }
    backTracking(n, n, '');
    return result;
}
