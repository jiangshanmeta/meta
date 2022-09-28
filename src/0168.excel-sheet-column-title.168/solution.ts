function convertToTitle (n: number): string {
    const stack:string[] = [];
    while (n > 0) {
        const rest = (n - 1) % 26 + 1;
        stack.push(String.fromCharCode(rest + 64));
        n = (n - rest) / 26;
    }

    return stack.reverse().join('');
}
