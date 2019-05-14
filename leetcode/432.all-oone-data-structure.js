/**
 * Initialize your data structure here.
 */
// 既然要求O(1) 那就是hash了
var AllOne = function() {
    // keyValue的key对应inc的参数key value是其数量
    this.keyValue = {};
    // valueCount 同一个value值总共出现过几次
    this.valueCount = {};
    // value=>key的map 考虑到一个value可能对应多个key
    this.valueKeyMap = {};
    // 最小数量
    this.minCount = 0;
    // 最大数量
    this.maxCount = 0;
    // 由于最小值计算在dec中有点复杂 而且不一定需要 lazy计算
    this.minDirty = false;
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    let newValue;

    if(this.keyValue[key]){
        const oldValue = this.keyValue[key];
        newValue = oldValue+1;
        delete this.valueKeyMap[oldValue][key];
        this.valueCount[oldValue]--;
        if(!this.minDirty && this.minCount === oldValue && this.valueCount[oldValue] === 0){
            this.minCount = newValue;
        }
    }else{
        newValue = 1;

        this.minCount = 1;
        this.minDirty = false;
    }
    
    this.keyValue[key] = newValue;
    (this.valueKeyMap[newValue] || (this.valueKeyMap[newValue] = {}))[key] = true;
    this.valueCount[newValue] = (this.valueCount[newValue] || 0)+1;

    newValue>this.maxCount && (this.maxCount = newValue);
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if(!this.keyValue[key]){
        return;
    }
    let oldValue;
    
    if(this.keyValue[key] === 1){
        oldValue = 1;
        delete this.keyValue[key];
        if(this.minCount === 1 && this.valueCount[1] === 1){
            this.minDirty = true;
        }
    }else{
        oldValue = this.keyValue[key];
        const newValue = oldValue-1;
        this.keyValue[key] = newValue;
        this.valueCount[newValue]++;
        this.valueKeyMap[newValue][key] = true;
        if(!this.minDirty && this.minCount>newValue){
            this.minCount = newValue;
        }
    }
    
    this.valueCount[oldValue]--;
    delete this.valueKeyMap[oldValue][key];

    if(this.maxCount === oldValue && this.valueCount[oldValue] === 0){
        this.maxCount--;
    }
    
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if(this.maxCount === 0){
        return "";
    }

    for(key in this.valueKeyMap[this.maxCount]){
        return key;
    }
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if(this.maxCount === 0){
        return "";
    }
    if(this.minDirty){
        let minCount = 1;
        while(this.valueCount[minCount] === 0){
            minCount++;
        }
        this.minCount = minCount
    }
    
    for(let key in this.valueKeyMap[this.minCount]){
        return key;
    }
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */