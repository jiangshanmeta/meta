/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    const list = date.split(' ');
    const monthMap = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
    };
    const day = String(parseInt(list[0])).padStart(2, '0');
    return `${list[2]}-${monthMap[list[1]]}-${day}`;
};
