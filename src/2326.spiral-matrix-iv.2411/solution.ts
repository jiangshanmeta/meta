class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function spiralMatrix (m: number, n: number, head: ListNode | null): number[][] {
    const result = new Array<number[]>(m);
    for (let i = 0; i < m; i++) {
        result[i] = new Array<number>(n).fill(-1);
    }
    let offset = 0;
    while (head) {
        let j = offset;
        while (head && j < n - offset) {
            result[offset][j++] = head.val;
            head = head.next;
        }
        let i = offset + 1;
        while (head && i < m - offset) {
            result[i++][n - offset - 1] = head.val;
            head = head.next;
        }

        if (m - offset - 1 !== offset) {
            j = n - offset - 2;
            while (head && j >= offset) {
                result[m - offset - 1][j--] = head.val;
                head = head.next;
            }
        }

        if (offset !== n - offset - 1) {
            i = m - offset - 2;
            while (head && i > offset) {
                result[i--][offset] = head.val;
                head = head.next;
            }
        }
        offset++;
    }
    return result;
}
