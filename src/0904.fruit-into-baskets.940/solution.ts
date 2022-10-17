function totalFruit (fruits: number[]): number {
    let a = -1;
    let b = -1;
    let lastA = -1;
    let lastB = -1;
    let left = 0;
    let right = 0;
    for (let i = 0; i < fruits.length; i++) {
        if (a === -1) {
            a = fruits[i];
            lastA = i;
        } else if (fruits[i] === a) {
            lastA = i;
        } else if (b === -1) {
            b = fruits[i];
            lastB = i;
            right = i;
            break;
        }
    }
    if (right === 0) {
        return fruits.length;
    }
    let result = right;

    while (right < fruits.length) {
        while (right < fruits.length && (fruits[right] === a || fruits[right] === b)) {
            if (fruits[right] === a) {
                lastA = right;
            } else {
                lastB = right;
            }

            result = Math.max(result, right - left + 1);
            right++;
        }
        if (right < fruits.length) {
            if (fruits[right - 1] === a) {
                b = fruits[right];
                left = lastB + 1;
                lastB = right;
            } else {
                a = fruits[right];
                left = lastA + 1;
                lastA = right;
            }
        }
    }
    return result;
}
