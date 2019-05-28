/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let lastRow = [1];
    for(let i=1;i<rowIndex+1;i++){
        const newRow = [1];
        for(let j=0;j<i-1;j++){
            newRow.push(lastRow[j]+lastRow[j+1]);
        }
        newRow.push(1);
        lastRow = newRow;
    }
    
    return lastRow;
};