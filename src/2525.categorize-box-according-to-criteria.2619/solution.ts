function categorizeBox (length: number, width: number, height: number, mass: number): string {
    const LIMIT4 = 10 ** 4;
    const LIMIT9 = 10 ** 9;

    const isBulky = (length >= LIMIT4 || width >= LIMIT4 || height >= LIMIT4 || mass >= LIMIT4) || length * height * width >= LIMIT9;
    const isHeavy = mass >= 100;
    if (isBulky && isHeavy) {
        return 'Both';
    }
    if (isBulky) {
        return 'Bulky';
    }
    if (isHeavy) {
        return 'Heavy';
    }
    return 'Neither';
}
