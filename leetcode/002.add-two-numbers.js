/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var item1;
    var item2;
    var sum;
    var yushu;
    var jinwei = 0;
    
    var headNode = new ListNode();
    var preNode = headNode;
    
    while(l1 && l2){
        item1 = l1.val;
        item2 = l2.val;
        sum = item1 + item2 + jinwei;
        
        if(sum>=10){
            yushu = sum%10;
            jinwei = (sum-yushu)/10;
            sum = yushu;
        }else{
            jinwei = 0;
        }


        
        preNode.next = new ListNode(sum);
        preNode = preNode.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1){
        item1 = l1.val;
        sum = item1 + jinwei;
        if(sum>=10){
            yushu = sum%10;
            jinwei = (sum-yushu)/10;
            sum = yushu;
        }else{
            jinwei = 0;
        }
        preNode.next = new ListNode(sum);
        preNode = preNode.next;
        l1 = l1.next;
    }
    
    while(l2){
        item2 = l2.val;
        sum = item2 + jinwei;
        if(sum>=10){
            yushu = sum%10;
            jinwei = (sum-yushu)/10;
            sum = yushu;
        }else{
            jinwei = 0;
        }
        preNode.next = new ListNode(sum);
        preNode = preNode.next;
        l2 = l2.next;
    }
    
    if(jinwei){
        preNode.next = new ListNode(jinwei);
    }
    
    return headNode.next;
};