function divingBoard (shorter: number, longer: number, k: number): number[] {
    if (k === 0) {
        return [];
    }
    if (shorter === longer) {
        return [
            shorter * k,
        ];
    }
    const result:number[] = [];
    for (let i = 0; i <= k; i++) {
        result.push(longer * i + shorter * (k - i));
    }
    return result;
}
