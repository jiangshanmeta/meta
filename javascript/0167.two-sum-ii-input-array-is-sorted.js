/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map();
    for(let i=0;i<numbers.length;i++){
        const rest = target - numbers[i];
        if(rest<=numbers[i] && map.has(rest)){
            return [map.get(rest),i+1];
        }
        map.set(numbers[i],i+1);
    }
};