/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    const MAX = Math.pow(2,31);
    function backTracking(list,start){
        if(start === S.length && list.length>2){
            return true;
        }
        
        for(let i=start;i<S.length;i++){
            // handle leading zero             
            if(i !== start && S[start] === '0'){
                return false;
            }
            
            const num = +S.slice(start,i+1);
            
            if(num>MAX){
                return false;
            }
            
            if(list.length>1 && list[list.length-2]+list[list.length-1] !== num ){
                continue;
            }
            
            list.push(num);
            const hasRst = backTracking(list,i+1);
            if(hasRst){
                return true;
            }
            list.pop();
        }        
        
    }
    
    const list = [];
    backTracking(list,0);
    
    return list;
};