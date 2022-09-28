function thousandSeparator (n: number): string {
    const str = String(n);
    const result:string[] = [];
    let offset = str.length % 3;
    if (offset !== 0) {
        result.push(str.slice(0, offset));
    }
    while (offset < str.length) {
        result.push(str.slice(offset, offset + 3));
        offset += 3;
    }

    return result.join('.');
}
