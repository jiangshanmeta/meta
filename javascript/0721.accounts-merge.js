/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// 并查集问题
var accountsMerge = function(accounts) {
    // indexs存储对应父节点的索引 初始为自己的索引
    const indexs = new Array(accounts.length);
    for(let i=0;i<indexs.length;i++){
        indexs[i] = i;
    }
    const map = {};
    const result = [];
    for(let i=0;i<accounts.length;i++){
        if(accounts[i].length<2){
            result.push(accounts[i]);
            continue;
        }
        const relateIndex = [];
        // 遍历这个账号所有的email
        for(let j=1;j<accounts[i].length;j++){
            if(map[accounts[i][j]] !== undefined){
                // 根据email找到对应账号的最高层父节点索引
                let start = map[accounts[i][j]];
                while(indexs[start] !== start){
                    start = indexs[start];
                }
                // 更新父节点索引 免得下次查的时候再循环一遍
                // 对应是把这棵树变得更平衡一点 减少树的高度
                map[accounts[i][j]] = start;
                indexs[map[accounts[i][j]]] = start;
                relateIndex.push(start);
            }
        }
        if(relateIndex.length === 0){
            // 没有关联账号 对应email关联到该账号上
            for(let j=1;j<accounts[i].length;j++){
                map[accounts[i][j]] = i;
            }
        }else{
            // 取最小的索引作为父节点索引
            const index = Math.min(...relateIndex);
            indexs[i] = index;
            // 归并相关账号
            for(let j=0;j<relateIndex.length;j++){
                indexs[relateIndex[j]] = index;
            }
            // 更新相关email 不可缺少 因为有的email只关联一个account
            for(let j=1;j<accounts[i].length;j++){
                map[accounts[i][j]] = index;
            }
            
        }
    }
    
    // email按照账号索引关联
    const groupBy = Object.keys(map).reduce((obj,email)=>{
        // 要保证是最高层索引
        let start = map[email];
        while(indexs[start] !== start){
            start = indexs[start];
        }
        if(obj[start]){
            obj[start].push(email);
        }else{
            obj[start] = [email];
        }
        return obj;
    },{});
    
    // 排序 添加账户名 整理成答案需要的格式
    Object.keys(groupBy).forEach((index)=>{
        const emails = groupBy[index];
        emails.sort();
        emails.unshift(accounts[index][0]);
        result.push(emails);
    });
    
    return result;
};