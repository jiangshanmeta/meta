/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const stackS = [];
    
    for(let i=0;i<S.length;i++){
        if(S[i] !== '#'){
            stackS.push(S[i]);
        }else{
            stackS.pop();
        }
    }
    
    const stackT = [];
    
    for(let i=0;i<T.length;i++){
        if(T[i] !== '#'){
            stackT.push(T[i]);
        }else{
            stackT.pop();
        }
    }
    
    if(stackS.length !== stackT.length){
        return false;
    }
    
    for(let i=0;i<stackS.length;i++){
        if(stackS[i] !== stackT[i]){
            return false;
        }
    }
    return true;
};