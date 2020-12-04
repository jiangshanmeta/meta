class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let depthA = getDepth(headA);
    let depthB = getDepth(headB);
    while(depthA>depthB){
        headA = (headA as ListNode).next;
        depthA--;
    }
    while(depthB>depthA){
        headB = (headB as ListNode).next;
        depthB--;
    }
    while(headA !== null && headB !== null){
        if(headA === headB){
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

function getDepth(node:ListNode|null):number{
    let result = 0;
    while(node !== null){
        result++;
        node = node.next;
    }
    return result;
}