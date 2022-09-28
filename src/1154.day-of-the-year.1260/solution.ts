function dayOfYear (date: string): number {
    return (Date.parse(date) - Date.parse(date.substring(0, 4) + '-01-01')) / 86400000 + 1;
}
