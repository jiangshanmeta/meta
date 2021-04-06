function numOfBurgers (tomatoSlices: number, cheeseSlices: number): number[] {
    const x = (tomatoSlices - 2 * cheeseSlices) / 2;
    if (x < 0 || !Number.isInteger(x) || cheeseSlices - x < 0) {
        return [];
    }

    return [x, cheeseSlices - x, ];
}
