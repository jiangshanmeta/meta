/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const targetLength = Math.max(a.length,b.length);
    a = a.padStart(targetLength,"0");
    b = b.padStart(targetLength,"0");
    let add = 0;
    let num1;
    let num2;
    let val;
    let jinwei;
    const arr = [];
    for(let index = targetLength-1;index>-1;index--){
        num1 = Number(a[index]);
        num2 = Number(b[index]);
        val = num1^num2;
        jinwei = num1&num2;
        if(add){
            if(val === 0){
                val = 1;
            }else{
                jinwei = 1;
                val = 0;
            }
        }
        
        arr.unshift(val);
        add = jinwei;
        
    }
    
    if(jinwei){
        arr.unshift(1);
    }
    return arr.join("");
};