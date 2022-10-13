function destCity (paths: string[][]): string {
    const map = new Map<string, string>();
    for (const [from, to, ] of paths) {
        map.set(from, to);
    }
    let dest = paths[0][0];
    while (map.has(dest)) {
        dest = map.get(dest);
    }
    return dest;
}
