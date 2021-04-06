class RedBlackTreeNode {
    left:RedBlackTreeNode|null = null;
    right:RedBlackTreeNode|null = null;
    smallerCount=0;
    totalCount=1;
    repeatCount = 1;
    static RED = 1;
    static BLACK = 0;
    constructor (public val:number, public color:number) {

    }

    static isRed (node:RedBlackTreeNode|null) {
        if (node === null) {
            return false;
        }
        return node.color === RedBlackTreeNode.RED;
    }

    static rotateLeft (h:RedBlackTreeNode) {
        const x = h.right!;
        h.right = x.left;
        x.left = h;

        x.color = h.color;
        h.color = RedBlackTreeNode.RED;

        this.updateNodeCount(h);
        this.updateNodeCount(x);

        return x;
    }

    static rotateRight (h:RedBlackTreeNode) {
        const x = h.left!;
        h.left = x.right;
        x.right = h;

        x.color = h.color;
        h.color = RedBlackTreeNode.RED;

        this.updateNodeCount(h);
        this.updateNodeCount(x);

        return x;
    }

    static updateNodeCount (node:RedBlackTreeNode) {
        node.smallerCount = this.getTotalCount(node.left);
        node.totalCount = node.smallerCount + node.repeatCount + this.getTotalCount(node.right);
    }

    static getTotalCount (node:RedBlackTreeNode|null) {
        if (!node) {
            return 0;
        }
        return node.totalCount;
    }

    static flipColor (node:RedBlackTreeNode) {
        node.color = RedBlackTreeNode.RED;
        (node.left!).color = RedBlackTreeNode.BLACK;
        (node.right!).color = RedBlackTreeNode.BLACK;
    }
}

class StreamRank {
    root:RedBlackTreeNode|null = null;
    constructor () {

    }

    track (x: number): void {
        this.root = this.insert(this.root, x);
    }

    insert (root:RedBlackTreeNode|null, x:number) {
        if (!root) {
            return new RedBlackTreeNode(x, RedBlackTreeNode.RED);
        }
        if (x < root.val) {
            root.left = this.insert(root.left, x);
        } else if (x > root.val) {
            root.right = this.insert(root.right, x);
        } else {
            root.repeatCount++;
            root.totalCount++;
        }

        if (RedBlackTreeNode.isRed(root.right) && !RedBlackTreeNode.isRed(root.left)) {
            root = RedBlackTreeNode.rotateLeft(root);
        }

        if (RedBlackTreeNode.isRed(root.left) && RedBlackTreeNode.isRed(root.left.left)) {
            root = RedBlackTreeNode.rotateRight(root);
        }

        if (RedBlackTreeNode.isRed(root.left) && RedBlackTreeNode.isRed(root.right)) {
            RedBlackTreeNode.flipColor(root);
        }

        RedBlackTreeNode.updateNodeCount(root);

        return root;
    }

    getRankOfNumber (x: number): number {
        return this.search(this.root, x);
    }

    search (root:RedBlackTreeNode|null, x:number) {
        if (root === null) {
            return 0;
        }

        if (x < root.val) {
            return this.search(root.left, x);
        } else if (x > root.val) {
            return root.repeatCount + root.smallerCount + this.search(root.right, x);
        } else {
            return root.repeatCount + root.smallerCount;
        }
    }
}

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */
