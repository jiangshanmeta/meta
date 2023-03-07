function maxValue (n: string, x: number): string {
    const xStr = String(x);
    const list = n.split('');
    if (list[0] !== '-') {
        for (let i = 0; i < list.length; i++) {
            if (xStr > list[i]) {
                list.splice(i, 0, xStr);
                return list.join('');
            }
        }
    } else {
        for (let i = 1; i < list.length; i++) {
            if (xStr < list[i]) {
                list.splice(i, 0, xStr);
                return list.join('');
            }
        }
    }
    list.push(xStr);
    return list.join('');
}
