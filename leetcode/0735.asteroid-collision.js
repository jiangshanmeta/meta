/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [asteroids.shift()];
    while(asteroids.length){
        let node = asteroids.shift();
        if(node<0 && stack.length>0 && stack[stack.length-1]>0){
            let stackTop = stack.pop();
            let sum = node+stackTop;
            if(sum<0){
                asteroids.unshift(node);
            }else if(sum>0){
                stack.push(stackTop);
            }
        }else{
            stack.push(node);
        }

    }
    
    return stack;
};