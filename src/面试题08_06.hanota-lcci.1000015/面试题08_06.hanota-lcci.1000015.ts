/**
 Do not return anything, modify C in-place instead.
 */
function hanota (A: number[], B: number[], C: number[]): void {
    return helper(A.length, A, B, C);
}

function helper (n:number, A:number[], B:number[], C:number[]) {
    if (n === 1) {
        C.push(A.pop());
        return;
    }
    helper(n - 1, A, C, B);
    C.push(A.pop());
    helper(n - 1, B, A, C);
}
