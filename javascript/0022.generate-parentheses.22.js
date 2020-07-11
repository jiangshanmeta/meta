/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var rst = [];
    var ruleStack = [];

    // 0=>push 1=>pop     
    var restPushCount = 0;
    var restPopCount = n;
    ruleStack.push({
        type:0,
        count:n,
    });
   
    var lastCount;
    var stackTop;

    while(ruleStack.length){
        ruleType = ruleStack[ruleStack.length-1].type;
        if(ruleStack[ruleStack.length-1].type){
            // 上一次操作是pop，因此本次需要添加的规则是push
            ruleStack.push({
                type:0,
                count:restPushCount,
            });
            restPopCount += restPushCount;
            restPushCount = 0;
        }else{
            // 上一次操作是push,需要pop
            if(restPushCount === 0){
                ruleStack.push({
                    type:1,
                    count:restPopCount
                })
                restPopCount = 0;
            }else{
                ruleStack.push({
                    type:1,
                    count:1
                });
                restPopCount--;
            }
        }
       
        // 已确认一个组合         
        if(restPushCount === 0 && restPopCount === 0){
            rst.push(ruleStack.map(function(item){
                var str = item.type? ")":"(";
                return str.repeat(item.count);
            }).join("")  )

            restPopCount += ruleStack[ruleStack.length-1].count;
            ruleStack.pop();
           
            while(ruleStack.length){
                stackTop = ruleStack[ruleStack.length-1];
                lastCount = stackTop.count;
                if(stackTop.type){
                    if(restPopCount>0){
                        stackTop.count++;
                        restPopCount--;
                        break;
                    }else{
                        restPopCount += lastCount;
                        ruleStack.pop();

                    }
                }else{
                    if(lastCount === 1){
                        restPushCount += lastCount;
                        restPopCount -= lastCount;
                        ruleStack.pop();
                    }else{
                        restPushCount++;
                        restPopCount--;
                        stackTop.count--;
                        break;
                    }
                }
            }


        }
       
    }
    return rst;
};