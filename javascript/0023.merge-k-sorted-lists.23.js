// 思路一
// 最基本的链表合并，每次合并的节点是一组链表头结点中最小的

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const emptyHead = new ListNode();
    let lastNode = emptyHead;
    
    lists = lists.filter((node)=>node);
    
    while(lists.length){
        let minVal = Infinity;
        let lastIndex;
        // 找到最小的节点         
        lists.forEach((node,index)=>{
            if(node.val<minVal){
                minVal = node.val;
                lastIndex = index;
            }
        });
        
        lastNode.next = lists[lastIndex];
        lastNode = lastNode.next;
        lists[lastIndex] = lastNode.next;
        if(!lists[lastIndex]){
            lists.splice(lastIndex,1);
        }
        
    }
    
    return emptyHead.next;
};



// 思路二
// 分治
// 转换为两个有序链表合并的问题

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists,low=0,high=lists.length-1) {
    if(!lists.length){
        return lists;
    }

    // 退出递归的条件，只有一个链表
    if(low === high){
        return lists[low];
    }
    
    const mid = Math.floor((low+high)/2);
    
    // 分治
    const left = mergeKLists(lists,low,mid);
    const right = mergeKLists(lists,mid+1,high);
    
    return merge2List(left,right);
};

// 合并两个已排序链表
var merge2List = function(l1,l2){
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    
    if(l1.val<l2.val){
        l1.next = merge2List(l1.next,l2);
        return l1;
    }else{
        l2.next = merge2List(l2.next,l1);
        return l2;
    }
    
};