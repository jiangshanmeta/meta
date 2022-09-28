function angleClock (hour: number, minutes: number): number {
    if (hour === 12) {
        hour = 0;
    }
    const mDeg = minutes * 6;
    const hDeg = (hour + minutes / 60) * 30;
    const deg = Math.abs(hDeg - mDeg);
    return Math.min(deg, 360 - deg);
}
