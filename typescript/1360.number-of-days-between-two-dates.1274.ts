function daysBetweenDates(date1: string, date2: string): number {
    return Math.abs((new Date(date1).getTime()-new Date(date2).getTime())/86400000);
};