function canAliceWin (n: number): boolean {
    let isAlice = true;
    let stone = 10;
    while (n >= stone) {
        n -= stone;
        stone--;
        isAlice = !isAlice;
    }

    return !isAlice;
}
