function checkPerfectNumber (num: number): boolean {
    if (num < 2) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i !== 0) {
            continue;
        }
        const rest = num / i;
        sum += i;
        if (i !== rest) {
            sum += rest;
        }
    }
    return sum === num;
}
