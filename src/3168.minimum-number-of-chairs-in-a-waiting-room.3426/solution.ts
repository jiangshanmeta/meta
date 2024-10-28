function minimumChairs (s: string): number {
    let seat = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'E') {
            seat--;
            result = Math.max(result, -seat);
        } else {
            seat++;
        }
    }
    return result;
}
