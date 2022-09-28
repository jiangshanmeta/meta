function constructRectangle (area: number): number[] {
    let w = Math.floor(Math.sqrt(area));
    while (area % w !== 0) {
        w = Math.floor(area / Math.ceil(area / w));
    }
    return [
        area / w,
        w,
    ];
}
