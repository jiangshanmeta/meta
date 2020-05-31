/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    const map = Object.create(null);
    for(let i=0;i<astr.length;i++){
        if(map[astr[i]]){
            return false;
        }
        map[astr[i]] = true;
    }
    return true;
};