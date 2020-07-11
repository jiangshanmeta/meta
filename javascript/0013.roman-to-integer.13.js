/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var hash = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    };
    
    var num = 0;
    var sItem;
    var nextItem;
    var symbol = 1;
    for(var sIndex =0;sIndex<s.length;sIndex++){
        symbol = 1;
        sItem = s[sIndex];
        if(sIndex<s.length-1){
            if(hash[s[sIndex+1]]>hash[sItem] ){
                symbol = -1;
            }
        }
        num += symbol*hash[sItem]
    }
    return num;
};