function complexNumberMultiply (a: string, b: string): string {
    const [n1, n2, ] = parse(a);
    const [n3, n4, ] = parse(b);

    return `${n1 * n3 - n2 * n4}+${n2 * n3 + n1 * n4}i`;
}

function parse (str:string):[number, number] {
    const plusIndex = str.indexOf('+');
    return [
        +str.slice(0, plusIndex),
        +str.slice(plusIndex + 1, str.length - 1),
    ];
}
