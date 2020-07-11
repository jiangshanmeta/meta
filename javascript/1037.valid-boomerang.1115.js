/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [p1,p2,p3] = points;
    // 判断是否是distinct的
    if(p1[0] === p2[0] && p1[1] === p2[1]){
        return false;
    }
    if(p1[0] === p3[0] && p1[1] === p3[1]){
        return false;
    }
    if(p2[0] === p3[0] && p2[1] === p3[1]){
        return false;
    }
    // 判断是否是在一条直线上 (经过同一点 斜率一致)
    const deltaX1 = p2[0]-p1[0];
    const deltaX2 = p3[0]-p1[0];
    const deltaY1 = p2[1]-p1[1];
    const deltaY2 = p3[1]-p1[1];
    if(deltaX1*deltaY2 === deltaX2*deltaY1){
        return false;
    }
    return true;
};