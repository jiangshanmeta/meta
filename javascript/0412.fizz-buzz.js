/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.apply(null, { length: n }).map((item,index)=>{
        index++;
        const mod3 = index%3;
        const mod5 = index%5;
        if(mod3 ===0 && mod5 === 0){
           return 'FizzBuzz'
        }
        if(mod3 === 0){
            return 'Fizz'
        }
        if(mod5 === 0){
            return 'Buzz'
        }
        return String(index);
    });
};