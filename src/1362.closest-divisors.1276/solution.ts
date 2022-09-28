function closestDivisors (num: number): number[] {
    const [a, b, ] = calc(num + 1);
    const [c, d, ] = calc(num + 2);
    if (a - b < c - d) {
        return [a, b, ];
    } else {
        return [c, d, ];
    }
}

function calc (num:number):[number, number] {
    let w = Math.floor(Math.sqrt(num));
    while (num % w !== 0) {
        w = Math.floor(num / Math.ceil(num / w));
    }
    return [
        num / w,
        w,
    ];
}
