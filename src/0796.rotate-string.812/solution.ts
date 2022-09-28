function rotateString (A: string, B: string): boolean {
    return A.length === B.length && (A + A).includes(B);
}
