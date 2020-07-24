
var FreqStack = function() {
    this.index = 0;
    this.valueIndexMap = {};
    this.frequencyListValue = [];
    this.frequencyListCount = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    const index = this.index++;
    (this.valueIndexMap[x] || (this.valueIndexMap[x] = [])).unshift(index);
    const count = this.valueIndexMap[x].length;
    if(count === 1){
        this.frequencyListValue.push(x);
        this.frequencyListCount.push(1);
    }else{
        const index = this.frequencyListValue.indexOf(x);
        this.frequencyListValue.splice(index,1);
        this.frequencyListCount.splice(index,1);
        // 找到第一个<count的
        let low = 0;
        let high = this.frequencyListCount.length-1;
        let targetIndex = this.frequencyListCount.length;
        while(low<=high){
            const mid = (low+high) >> 1;
            if(this.frequencyListCount[mid] === count){
                targetIndex = mid;
                break;
            }else if(this.frequencyListCount[mid]>count){
                low = mid+1;
            }else{
                targetIndex = Math.min(mid,targetIndex);
                high = mid-1;
            }
        }
        this.frequencyListCount.splice(targetIndex,0,count);
        this.frequencyListValue.splice(targetIndex,0,x);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const count = this.frequencyListCount[0];
    let indexInList = 0;
    let maxValueIndex = this.valueIndexMap[this.frequencyListValue[0]][0];
    let i=1;
    while(i<this.frequencyListCount.length && this.frequencyListCount[i] === count){
        if(this.valueIndexMap[this.frequencyListValue[i]][0]>maxValueIndex){
            indexInList = i;
            maxValueIndex = this.valueIndexMap[this.frequencyListValue[i]][0];
        }
        i++;
    }
    
    const value = this.frequencyListValue[indexInList];
    this.valueIndexMap[value].shift();
    this.frequencyListCount.splice(indexInList,1);
    this.frequencyListValue.splice(indexInList,1);
    if(count>1){
        while(indexInList<this.frequencyListCount.length && this.frequencyListCount[indexInList] === count){
            indexInList++;
        }
        this.frequencyListValue.splice(indexInList,0,value);
        this.frequencyListCount.splice(indexInList,0,count-1);
    }
    return value;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */