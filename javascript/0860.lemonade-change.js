/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const countMap = {
        5:0,
        10:0,
    };
    for(let i=0;i<bills.length;i++){
        if(bills[i] === 5){
            countMap[5]++;
        }else if(bills[i] === 10){
            if(countMap[5]>0){
                countMap[5]--;
                countMap[10]++;
            }else{
                return false;
            }
        }else{
            if(countMap[5] === 0){
                return false;
            }
            if(countMap[10]>0){
                countMap[10]--;
                countMap[5]--;
            }else if(countMap[5]>2){
                countMap[5] -= 3;
            }else{
                return false;
            }
            
        }
    }
    return true;
};