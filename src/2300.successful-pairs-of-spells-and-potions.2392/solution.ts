function successfulPairs (spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    return spells.map((spell) => {
        const min = Math.ceil(success / spell);
        let res = potions.length;
        let low = 0;
        let high = potions.length - 1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (potions[mid] < min) {
                low = mid + 1;
            } else {
                res = Math.min(res, mid);
                high = mid - 1;
            }
        }
        return potions.length - res;
    });
}
