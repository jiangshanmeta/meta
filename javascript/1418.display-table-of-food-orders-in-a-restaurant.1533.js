/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    const foodMap = {};
    const tableFoodCount = {};
    for (let i = 0; i < orders.length; i++) {
        const [
            customerName, tableNumber, foodItem, ] = orders[i];
        foodMap[foodItem] = true;
        if (!tableFoodCount[tableNumber]) {
            tableFoodCount[tableNumber] = {};
        }
        if (!tableFoodCount[tableNumber][foodItem]) {
            tableFoodCount[tableNumber][foodItem] = 0;
        }
        tableFoodCount[tableNumber][foodItem]++;
    }
    const foodSequence = Object.keys(foodMap).sort();
    const tableSequence = Object.keys(tableFoodCount).sort((a, b) => a - b);
    const result = [
        [
            'Table', ...foodSequence, ],
    ];
    for (let i = 0; i < tableSequence.length; i++) {
        const table = tableSequence[i];
        const row = [
            table, ];
        const rowData = tableFoodCount[table];
        for (let j = 0; j < foodSequence.length; j++) {
            if (!rowData[foodSequence[j]]) {
                row.push('0');
            } else {
                row.push(rowData[foodSequence[j]] + '');
            }
        }
        result.push(row);
    }
    return result;
};
