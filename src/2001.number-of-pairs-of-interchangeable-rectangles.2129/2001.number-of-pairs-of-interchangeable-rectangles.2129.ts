function interchangeableRectangles (rectangles: number[][]): number {
    const map = new Map<number, number>();
    for (const [w, h, ] of rectangles) {
        const ratio = w / h;
        if (map.has(ratio)) {
            map.set(ratio, map.get(ratio) + 1);
        } else {
            map.set(ratio, 1);
        }
    }
    let result = 0;
    for (const pair of map.values()) {
        result += pair * (pair - 1) / 2;
    }
    return result;
}
