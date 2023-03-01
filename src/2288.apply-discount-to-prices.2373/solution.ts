function discountPrices (sentence: string, discount: number): string {
    return sentence.split(' ').map((str) => {
        if (str[0] !== '$' || str[1] === '-' || str.length === 1 || /[^\d.]/.test(str.slice(1))) {
            return str;
        }
        const num = +str.slice(1);
        if (Number.isNaN(num)) {
            return str;
        }

        return `$${(num * (1 - discount / 100)).toFixed(2)}`;
    }).join(' ');
}
