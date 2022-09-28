/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function (poly1, poly2) {
    const dummyHead = new PolyNode();
    let tail = dummyHead;
    while (poly1 && poly2) {
        if (poly1.power > poly2.power) {
            tail.next = new PolyNode(poly1.coefficient, poly1.power);
            tail = tail.next;
            poly1 = poly1.next;
        } else if (poly1.power < poly2.power) {
            tail.next = new PolyNode(poly2.coefficient, poly2.power);
            tail = tail.next;
            poly2 = poly2.next;
        } else {
            const coefficient = poly1.coefficient + poly2.coefficient;
            const power = poly1.power;
            poly1 = poly1.next;
            poly2 = poly2.next;
            if (coefficient !== 0) {
                tail.next = new PolyNode(coefficient, power);
                tail = tail.next;
            }
        }
    }
    if (poly1) {
        tail.next = poly1;
    } else if (poly2) {
        tail.next = poly2;
    }
    return dummyHead.next;
};
