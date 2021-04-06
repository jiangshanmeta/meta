function canPlaceFlowers (flowerbed: number[], n: number): boolean {
    let index = 0;
    while (index < flowerbed.length && n > 0) {
        if (flowerbed[index] === 1) {
            index++;
            continue;
        }
        let canPlace = true;
        if ((index > 0 && flowerbed[index - 1] === 1) || (index < flowerbed.length - 1 && flowerbed[index + 1] === 1)) {
            canPlace = false;
        }
        if (canPlace) {
            flowerbed[index] = 1;
            n--;
        }
        index++;
    }
    return n === 0;
}
