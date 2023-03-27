function distMoney (money: number, children: number): number {
    if (children > money) {
        return -1;
    }
    money -= children;
    const mod = money % 7;
    let count = (money - mod) / 7;
    if (count > children) {
        return children - 1;
    }

    if (count === children) {
        if (mod) {
            return count - 1;
        }
        return children;
    }
    const rest = children - count;

    if (mod === 3 * rest && rest === 1) {
        count--;
    }

    return count;
}
