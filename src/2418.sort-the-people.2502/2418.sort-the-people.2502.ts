function sortPeople (names: string[], heights: number[]): string[] {
    return names.map((name, index) => {
        return {
            name,
            height: heights[index],
        };
    }).sort((a, b) => b.height - a.height).map(item => item.name);
}
