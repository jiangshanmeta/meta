function corpFlightBookings (bookings: number[][], n: number): number[] {
    const counts:number[] = new Array(n).fill(0);
    for (const [first, last, seats, ] of bookings) {
        counts[first - 1] += seats;
        if (last < counts.length) {
            counts[last] -= seats;
        }
    }
    for (let i = 1; i < counts.length; i++) {
        counts[i] += counts[i - 1];
    }
    return counts;
}
