/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

function flatten (head: Node | null): Node | null {
    if (!head) {
        return null;
    }

    return flat(head)[0];
}

function flat (head:Node):[Node, Node] {
    let node = head;
    let last = head;
    while (node) {
        last = node;
        const next = node.next;
        if (node.child) {
            const [cH, cT, ] = flat(node.child);
            node.next = cH;
            cH.prev = node;
            if (next) {
                next.prev = cT;
                cT.next = next;
            }
            last = cT;
        }
        node.child = null;
        node = next;
    }
    return [head, last, ];
}
