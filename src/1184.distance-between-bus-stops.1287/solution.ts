function distanceBetweenBusStops (distance: number[], start: number, destination: number): number {
    const total = distance.reduce((sum, item) => sum + item, 0);
    if (destination < start) {
        const tmp = destination;
        destination = start;
        start = tmp;
    }
    let sum = 0;
    for (let i = start; i < destination; i++) {
        sum += distance[i];
    }
    return Math.min(sum, total - sum);
}
