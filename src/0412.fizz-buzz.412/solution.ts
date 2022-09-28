function fizzBuzz (n: number): string[] {
    const result:string[] = [];
    for (let i = 1; i <= n; i++) {
        const mod3 = i % 3 === 0;
        const mod5 = i % 5 === 0;
        if (mod3 && mod5) {
            result.push('FizzBuzz');
        } else if (mod3) {
            result.push('Fizz');
        } else if (mod5) {
            result.push('Buzz');
        } else {
            result.push(String(i));
        }
    }
    return result;
}
