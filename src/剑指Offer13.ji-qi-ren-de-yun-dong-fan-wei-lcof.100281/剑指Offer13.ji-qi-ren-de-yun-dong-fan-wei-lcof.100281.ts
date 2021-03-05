function movingCount(m: number, n: number, k: number): number {
    const visited = new Set<string>();
    visited.add('0,0');
    const stackX = [0];
    const stackY = [0];
    let result = 1;
    const dxs = [-1,1];
    const dys = [-1,1];
    while(stackX.length){
        const x = stackX.pop();
        const y = stackY.pop();
        for(let dx of dxs){
            const newX = x+dx;
            if(newX === -1 || newX === m){
                continue;
            }
            const digitSums = getDigitSum(newX)+getDigitSum(y);
            if(digitSums>k){
                continue;
            }
            const pos = `${newX},${y}`;
            if(!visited.has(pos)){
                visited.add(pos);
                stackX.push(newX);
                stackY.push(y);
                result++;
            }
        }
        for(let dy of dys){
            const newY = y+dy;
            if(newY === -1 || newY === n){
                continue;
            }
            const digitSums = getDigitSum(x)+getDigitSum(newY);
            if(digitSums>k){
                continue;
            }
            const pos = `${x},${newY}`;
            if(!visited.has(pos)){
                visited.add(pos);
                stackX.push(x);
                stackY.push(newY);
                result++;
            }
        }
    }

    return result;
};

function getDigitSum(num:number):number{
    let result = 0;
    while(num){
        const digit = num%10;
        result += digit;
        num = (num-digit)/10;
    }
    return result;
}