/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if(n<2){
        return 0;
    }
    let result = Infinity;
    const stack = [{length:1,count:1,paste:1}];
    while(stack.length){
        let {
            length,
            count,
            paste,
        } = stack.pop();
        
        if(count>result){
            continue;
        }
        
        result = Math.min(result,(n-length)/paste+count);
        
        while(length<n){
            length += paste;
            count++;
            if((n-length)%length === 0){
                stack.push({
                    length,
                    count:count+1,
                    paste:length
                });
            }
            
        }
        
        
    }
    
    
    return result;
};