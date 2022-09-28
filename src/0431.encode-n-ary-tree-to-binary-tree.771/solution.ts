
class Node1 {
    val: number
    children: Node1[]
    constructor (val?: number) {
        this.val = (val === undefined ? 0 : val);
        this.children = [];
    }
}

class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val === undefined ? 0 : val);
          this.left = (left === undefined ? null : left);
          this.right = (right === undefined ? null : right);
      }
}

function serialize2TreeNode (root:Node1, siblings:Node1[], nextIndex:number) {
    const treeNode = new TreeNode(root.val);
    if (nextIndex < siblings.length) {
        treeNode.right = serialize2TreeNode(siblings[nextIndex], siblings, nextIndex + 1);
    }
    if (root.children.length) {
        treeNode.left = serialize2TreeNode(root.children[0], root.children, 1);
    }
    return treeNode;
}

function deserialize2Node (root:TreeNode, parentSiblings:Node1[]) {
    const node = new Node1(root.val);
    parentSiblings.push(node);
    if (root.right) {
        deserialize2Node(root.right, parentSiblings);
    }

    if (root.left) {
        deserialize2Node(root.left, node.children);
    }

    return node;
}

class Codec {
    constructor () {

    }

    // Encodes a tree to a binary tree.
    serialize (root: Node1 | null): TreeNode | null {
        if (!root) {
            return null;
        }
        return serialize2TreeNode(root, [] as Node1[], 1);
    }

    // Decodes your encoded data to tree.
    deserialize (root: TreeNode | null): Node1 | null {
        if (!root) {
            return null;
        }
        return deserialize2Node(root, [] as Node1[]);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
