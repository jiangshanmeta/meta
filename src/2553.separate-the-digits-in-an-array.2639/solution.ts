function separateDigits (nums: number[]): number[] {
    return nums.reduce<number[]>((arr, num) => {
        const item:number[] = [];
        while (num > 0) {
            const digit = num % 10;
            item.push(digit);
            num = (num - digit) / 10;
        }
        arr.push(...item.reverse());
        return arr;
    }, []);
}
