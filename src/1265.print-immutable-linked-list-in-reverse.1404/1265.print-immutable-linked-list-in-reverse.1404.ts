/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ImmutableListNode {
 *      printValue() {}
 *
 *      getNext(): ImmutableListNode {}
 * }
 */

function printLinkedListInReverse (head: ImmutableListNode) {
    const next = head.getNext();
    if (next) {
        printLinkedListInReverse(next);
    }
    head.printValue();
}
