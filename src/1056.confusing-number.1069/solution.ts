function confusingNumber (N: number): boolean {
    const map = new Map<string, string>();
    map.set('0', '0');
    map.set('1', '1');
    map.set('6', '9');
    map.set('8', '8');
    map.set('9', '6');
    const str = N.toString();

    const seq:string[] = [];
    for (let i = str.length - 1; i > -1; i--) {
        if (!map.has(str[i])) {
            return false;
        }
        seq.push(map.get(str[i]));
    }
    return seq.join('') !== str;
}
