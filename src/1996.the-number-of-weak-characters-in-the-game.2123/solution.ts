function numberOfWeakCharacters (properties: number[][]): number {
    properties.sort((a, b) => b[0] - a[0]);
    let result = 0;
    let maxDefence = properties[0][1];
    let index = 1;
    while (index < properties.length && properties[index][0] === properties[0][0]) {
        maxDefence = Math.max(maxDefence, properties[index][1]);
        index++;
    }

    while (index < properties.length) {
        const currentAttack = properties[index][0];
        let currentMaxDefence = properties[index][1];

        while (index < properties.length && properties[index][0] === currentAttack) {
            if (properties[index][1] < maxDefence) {
                result++;
            }
            currentMaxDefence = Math.max(currentMaxDefence, properties[index][1]);
            index++;
        }
        maxDefence = Math.max(maxDefence, currentMaxDefence);
    }
    return result;
}
