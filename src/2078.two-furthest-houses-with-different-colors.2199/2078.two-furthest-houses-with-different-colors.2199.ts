function maxDistance (colors: number[]): number {
    const map = new Map<number, [number, number]>();
    for (let i = 0; i < colors.length; i++) {
        if (map.has(colors[i])) {
            map.get(colors[i])[1] = i;
        } else {
            map.set(colors[i], [i, i, ]);
        }
    }
    let result = 0;
    const colorKeys = [...map.keys(), ];
    for (let i = 0; i < colorKeys.length; i++) {
        for (let j = i + 1; j < colorKeys.length; j++) {
            const [start1, end1, ] = map.get(colorKeys[i]);
            const [start2, end2, ] = map.get(colorKeys[j]);
            result = Math.max(
                result,
                Math.abs(end1 - start2),
                Math.abs(end1 - end2),
                Math.abs(end2 - start1)
            );
        }
    }
    return result;
}
