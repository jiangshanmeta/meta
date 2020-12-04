function lemonadeChange(bills: number[]): boolean {
    let count1 = 0;
    let count2 = 0;
    for(let i=0;i<bills.length;i++){
        if(bills[i] === 5){
            count1++;
        }else if(bills[i] === 10){
            if(count1 === 0){
                return false;
            }
            count1--;
            count2++;
        }else{
            if(count1>0 && count2>0){
                count1--;
                count2--;
            }else if(count1>2){
                count1 -= 3;
            }else{
                return false;
            }
        }
    }
    return true;
};