/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    // 转换为hash 便于搜索
    const map = {};
    for(let i=0;i<allowed.length;i++){
        const prefix = allowed[i].slice(0,2);
        if(map[prefix] === undefined){
            map[prefix] = [allowed[i][2]];
        }else{
            map[prefix].push(allowed[i][2]);
        }
    }

    function helper(bottom,map){
        // 递归退出条件 底座长度为2
        if(bottom.length === 2){
            // 能找到pyramid顶尖元素 可以构成
            if(map[bottom]){
                return true;
            }
            return false;
        }
        if(map[bottom.slice(0,2)] === undefined){
            return false;
        }
        // 排列组合出下一层的所有情况
        let arr = map[bottom.slice(0,2)];
        for(let i=1;i<bottom.length-1;i++){
            let sub = bottom.slice(i,i+2);
            if(map[sub] === undefined){
                return false;
            }
            arr = map[sub].reduce((newArr,char)=>{
                for(let i=0;i<arr.length;i++){
                    newArr.push(`${arr[i]}${char}`);
                }
                return newArr;
            },[]);
        }
        // 下一层继续暴力搜索
        for(let i=0;i<arr.length;i++){
            if(helper(arr[i],map)){
                return true;
            }
        }
        return false;
    }
    return helper(bottom,map);
};