function doesValidArrayExist (derived: number[]): boolean {
    const original = new Array<number>(derived.length);
    original[0] = 0;
    for (let i = 0; i < derived.length - 1; i++) {
        if (derived[i] === 0) {
            original[i + 1] = original[i];
        } else {
            original[i + 1] = original[i] === 1 ? 0 : 1;
        }
    }
    return (original[0] ^ original[original.length - 1]) === derived[derived.length - 1];
}
