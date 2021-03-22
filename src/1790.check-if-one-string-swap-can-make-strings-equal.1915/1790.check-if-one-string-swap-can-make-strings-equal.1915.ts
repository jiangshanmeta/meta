function areAlmostEqual(s1: string, s2: string): boolean {
    let firstIndex = -1;
    let changed = false;
    for(let i=0;i<s1.length;i++){
        if(s1[i] === s2[i]){
            continue;
        }
        if(changed){
            return false;
        }
        if(firstIndex === -1){
            firstIndex = i;
            continue;
        }
        if(s1[firstIndex] === s2[i] && s1[i] === s2[firstIndex]){
            changed = true;
            continue;
        }
        return false;
    }
    if(firstIndex !== -1 && !changed){
        return false;
    }
    return true
};