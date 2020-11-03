function backspaceCompare(S: string, T: string): boolean {
    const l1:string[] = [];
    for(let i=0;i<S.length;i++){
        if(S[i] === '#'){
            l1.pop();
        }else{
            l1.push(S[i]);
        }
    }
    const l2:string[] = [];
    for(let i=0;i<T.length;i++){
        if(T[i] === '#'){
            l2.pop();
        }else{
            l2.push(T[i])
        }
    }
    if(l1.length !== l2.length){
        return false;
    }
    for(let i=0;i<l1.length;i++){
        if(l1[i] !== l2[i]){
            return false;
        }
    }
    return true;
};