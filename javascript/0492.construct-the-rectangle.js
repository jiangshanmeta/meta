/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let base = Math.ceil(Math.sqrt(area));
    while(base<=area){
        if(area%base === 0){
            return [base,area/base];
        }
        base = Math.ceil(area/Math.floor(area/base));
    }
    
    
};