function removeDigit (number: string, digit: string): string {
    let str = '';
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== digit) {
            continue;
        }
        str = number.slice(0, i) + number.slice(i + 1);
        if (i < number.length && number[i] < number[i + 1]) {
            break;
        }
    }
    return str;
}
