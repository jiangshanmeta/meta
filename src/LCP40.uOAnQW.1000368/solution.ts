function maxmiumScore (cards: number[], cnt: number): number {
    cards.sort((a, b) => b - a);
    let sum = 0;
    let selectedOddIndex = -1;
    let selectedEvenIndex = -1;
    for (let i = cnt - 1; i > -1; i--) {
        sum += cards[i];
        if (cards[i] % 2 === 1 && selectedOddIndex === -1) {
            selectedOddIndex = i;
        } else if (cards[i] % 2 === 0 && selectedEvenIndex === -1) {
            selectedEvenIndex = i;
        }
    }
    if (sum % 2 === 0) {
        return sum;
    }
    let index = cnt;
    let swapOddIndex = 0;
    let swapEvenIndex = 0;
    while (index < cards.length && (!swapOddIndex || !swapEvenIndex)) {
        if (cards[index] % 2 === 1 && !swapOddIndex) {
            swapOddIndex = index;
        } else if (cards[index] % 2 === 0 && !swapEvenIndex) {
            swapEvenIndex = index;
        }
        index++;
    }

    let result = 0;

    if (selectedEvenIndex !== -1 && swapOddIndex) {
        result = sum - cards[selectedEvenIndex] + cards[swapOddIndex];
    }

    if (selectedOddIndex !== -1 && swapEvenIndex) {
        result = Math.max(result, sum - cards[selectedOddIndex] + cards[swapEvenIndex]);
    }

    return result;
}
