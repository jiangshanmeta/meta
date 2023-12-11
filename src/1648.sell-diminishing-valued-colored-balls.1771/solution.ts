
function maxProfit (inventory: number[], orders: number): number {
    let result = 0n;
    inventory.sort((a, b) => b - a);
    let index = 0;
    while (index < inventory.length - 1 && inventory[index + 1] === inventory[index]) {
        index++;
    }
    while (orders > 0) {
        const next = index === inventory.length - 1 ? 0 : inventory[index + 1];
        const canProvideOrder = (inventory[index] - (next)) * (index + 1);
        console.log(canProvideOrder);
        if (canProvideOrder <= orders) {
            result += BigInt(index + 1) * BigInt(inventory[index] + next + 1) * BigInt(inventory[index] - next) / 2n;
            orders -= canProvideOrder;
            index++;
            while (index < inventory.length - 1 && inventory[index + 1] === inventory[index]) {
                index++;
            }
        } else {
            const baseOrder = Math.floor(orders / (index + 1));
            const rest = orders - baseOrder * (index + 1);
            result += BigInt(index + 1) * BigInt(inventory[index] + inventory[index] - baseOrder + 1) * BigInt(baseOrder) / 2n;

            result += BigInt(rest) * BigInt(inventory[index] - baseOrder);
            console.log(baseOrder, rest, result);
            orders = 0;
        }
    }
    return Number(result % BigInt(10 ** 9 + 7));
}
