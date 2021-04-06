function addBinary (a: string, b: string): string {
    const stack:number[] = [];
    let indexA = a.length - 1;
    let indexB = b.length - 1;
    let addon = 0;
    while (indexA > -1 && indexB > -1) {
        const sum = addon + (+a[indexA--]) + (+b[indexB--]);
        const digit = sum & 1;
        stack.push(digit);
        addon = sum >> 1;
    }
    while (indexA > -1) {
        const sum = addon + (+a[indexA--]);
        const digit = sum & 1;
        stack.push(digit);
        addon = sum >> 1;
    }
    while (indexB > -1) {
        const sum = addon + (+b[indexB--]);
        const digit = sum & 1;
        stack.push(digit);
        addon = sum >> 1;
    }
    if (addon) {
        stack.push(addon);
    }

    return stack.reverse().join('');
}
