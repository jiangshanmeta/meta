function reformatDate(date: string): string {
    const [
        dayStr,
        monthStr,
        year
    ] = date.split(' ');
    const day = (parseInt(dayStr)+'').padStart(2,'0')
    const monthMap = new Map<string,string>([
        ['Jan','01'],
        ['Feb','02'],
        ['Mar','03'],
        ['Apr','04'],
        ['May','05'],
        ['Jun','06'],
        ['Jul','07'],
        ['Aug','08'],
        ['Sep','09'],
        ['Oct','10'],
        ['Nov','11'],
        ['Dec','12']
    ])
    return `${year}-${monthMap.get(monthStr)}-${day}`
};