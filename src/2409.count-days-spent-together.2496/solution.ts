function countDaysTogether (arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
    const prevsDays = [0, ];
    for (let i = 0; i < daysPerMonth.length; i++) {
        prevsDays[i + 1] = prevsDays[i] + daysPerMonth[i];
    }
    const parse2Day = (s:string) => {
        const [month, day, ] = s.split('-');
        return prevsDays[+month - 1] + (+day);
    };

    const start = Math.max(parse2Day(arriveAlice), parse2Day(arriveBob));
    const end = Math.min(parse2Day(leaveAlice), parse2Day(leaveBob));
    return Math.max(end - start + 1, 0);
}
