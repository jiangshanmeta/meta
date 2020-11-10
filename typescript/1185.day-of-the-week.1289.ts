const candidate:string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
function dayOfTheWeek(day: number, month: number, year: number): string {
    return candidate[new Date(year,month-1,day).getDay()];
};