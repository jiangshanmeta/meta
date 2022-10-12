function hasGroupsSizeX (deck: number[]): boolean {
    const map = new Map<number, number>();
    for (const num of deck) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    const counts = [...map.values(), ];

    let prev = counts[0];
    for (let i = 1; i < counts.length; i++) {
        prev = gcd(prev, counts[i]);
        if (prev === 1) {
            break;
        }
    }
    return prev >= 2;
}

function gcd (a:number, b:number) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
