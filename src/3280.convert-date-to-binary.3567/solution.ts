function convertDateToBinary (date: string): string {
    const year = +date.slice(0, 4);
    const month = +date.slice(5, 7);
    const day = +date.slice(8);
    return `${year.toString(2)}-${month.toString(2)}-${day.toString(2)}`;
}
