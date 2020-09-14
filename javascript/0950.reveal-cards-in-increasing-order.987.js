/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a);
    const result = [
        deck[0], ];
    // 把翻牌操作逆过来
    for (let i = 1; i < deck.length; i++) {
        result.unshift(result.pop());
        result.unshift(deck[i]);
    }
    return result;
};
