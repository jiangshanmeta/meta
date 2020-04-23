/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const groupReservedSeatsByRow = {};
    const rows = [];
    for(let i=0;i<reservedSeats.length;i++){
        const [row,column] = reservedSeats[i];
        if(!groupReservedSeatsByRow[row]){
            rows.push(row);
            groupReservedSeatsByRow[row] = [];
        }
        groupReservedSeatsByRow[row].push(column);
    }
    let result = 2*n;
    for(let i=0;i<rows.length;i++){
        result -= countOneRow(groupReservedSeatsByRow[rows[i]])
    }
    return result;
};

const b = [2,3,4,5];
const c = [4,5,6,7];
const d = [6,7,8,9];

function countOneRow(reserved){
    const seats = new Array(11).fill(true);
    reserved.forEach((index)=>{
        seats[index] = false;
    })
    const left = b.every(index=>seats[index]);
    const right = d.every(index=>seats[index]);
    if(left && right){
        return 0;
    }else if(left || right){
        return 1;
    }else{
        return c.every(index=>seats[index])?1:2;
    }
}