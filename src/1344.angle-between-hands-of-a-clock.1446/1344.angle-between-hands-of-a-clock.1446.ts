function angleClock(hour: number, minutes: number): number {
    if(hour === 12){
        hour = 0;
    }
    let mDeg = minutes*6;
    let hDeg = (hour+minutes/60)*30;
    let deg = Math.abs(hDeg-mDeg);
    return Math.min(deg,360-deg)
};