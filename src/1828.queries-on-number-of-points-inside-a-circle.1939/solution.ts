function countPoints (points: number[][], queries: number[][]): number[] {
    return queries.map(([x, y, r, ]) => {
        const maxDis = r * r;
        let result = 0;
        for (const [xi, yi, ] of points) {
            const dis = (xi - x) ** 2 + (yi - y) ** 2;
            if (dis <= maxDis) {
                result++;
            }
        }
        return result;
    });
}
