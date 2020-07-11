/**
 * @param {string} expression
 * @return {string[]}
 */
// 很像726
var braceExpansionII = function(expression) {
    let index = 0;
    
    function parse(){
        // 一个{}的内容被归并到list中
        const list = [];
        const listMap = {};
        // 以，分割的一个单元放在curItem中
        let curItem = [];
        while(index<expression.length){
            if(expression[index] === '{'){
                index++;
                curItem.push(parse());
            }else if(expression[index] === '}'){
                index++;
                break;
            }else if(expression[index] === ','){
                index++;
                const subList = handleCurItem(curItem);
                merge2List(subList,list,listMap);
                curItem = [];
            }else{
                curItem.push([expression[index++]]);
            }
        }
        const subList = handleCurItem(curItem);
        merge2List(subList,list,listMap);
        return list;
    }
    return parse().sort();
};

// curItem内的子项需要正交构成新的字符串
function handleCurItem(curItem){
    return curItem.reduce((last,cur)=>{
        const list = [];
        const map = {};
        for(let i=0;i<last.length;i++){
            for(let j=0;j<cur.length;j++){
                if(map[`${last[i]}${cur[j]}`]){
                    continue;
                }
                map[`${last[i]}${cur[j]}`] = true;
                list.push(`${last[i]}${cur[j]}`);
            }
        }
        return list;
    });
}

// 把一个单元的归并到list中
function merge2List(subList,list,listMap){
    for(let i=0;i<subList.length;i++){
        if(listMap[subList[i]]){
            continue;
        }
        listMap[subList[i]] = true;
        list.push(subList[i]);
    }
}