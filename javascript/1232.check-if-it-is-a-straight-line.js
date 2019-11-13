/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const [x1,y1] = coordinates[0];
    const [x2,y2] = coordinates[1];
    // 和y轴平行
    if(x1 === x2){
        for(let i=2;i<coordinates.length;i++){
            if(coordinates[i][0] !== x1){
                return false;
            }
        }
        return true;
    }else{
        // 正常一次函数 y = ax+b
        const a = (y1-y2)/(x1-x2);
        const b = y1-a*x1;
        for(let i=2;i<coordinates.length;i++){
            if(coordinates[i][0]*a+b !== coordinates[i][1]  ){
                return false;
            }
        }
        return true;
    }
};