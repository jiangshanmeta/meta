/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    if(expression[0] !== '-'){
        expression = `+${expression}`
    }
    const numerator = [];
    const denominator = [];
    let index = 0;
    // 解析得到分子分母
    while(index<expression.length){
        const sign = expression[index++] === '+'?1:-1;
        const slashIndex = expression.indexOf('/',index);
        numerator.push(sign*(+expression.substring(index,slashIndex)));
        index = slashIndex+1;
        while(index<expression.length && expression[index] !== '-' && expression[index] !== '+'){
            index++;
        }
        denominator.push(+expression.substring(slashIndex+1,index));
    }
    // 求分母的最小公倍数
    let last = denominator[0];
    for(let i=1;i<denominator.length;i++){
        last = lcm(last,denominator[i]);
    }
    // 同分 求分子的和
    let sum = numerator.reduce((sum,item,index)=>{
        return sum+item*last/denominator[index];
    },0);
    
    if(sum === 0){
        return '0/1';
    }
    
    const isNegative = sum<0;
    sum = Math.abs(sum);
    // 约分
    const c = gcd(sum,last);
    return `${isNegative?'-':''}${sum/c}/${last/c}`;
};

// 最大公约数
function gcd(a,b){
    if(a<b){
        const tmp = a;
        a = b;
        b = tmp;
    }
    while(b !== 0){
        const tmp = a%b;
        a = b;
        b = tmp;
    }
    return a;
}
// 最小公倍数
function lcm(a,b){
    return a*b/gcd(a,b)
}