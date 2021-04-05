var StreamRank = function() {
    this.root = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function(x) {
    this.root = insert(this.root,x);
};

function insert(root,x){
    if(root === null){
        return new RedBlackTreeNode(x,red);
    }
    if(x<=root.val){
        root.left = insert(root.left,x);
    }else if(x>root.val){
        root.right = insert(root.right,x);
    }

    if(isRed(root.right) && !isRed(root.left)){
        root = rotateLeft(root);
    }

    if(isRed(root.left) && isRed(root.left.left)){
        root = rotateRight(root);
    }

    if(isRed(root.left) && isRed(root.right)){
        flip(root);
    }

    root.totalCount = getTotalCount(root.left)+getTotalCount(root.right)+1;
    root.smallerCount = getTotalCount(root.left)+1;
    return root;
}

/** 
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function(x) {
    return getSmaller(this.root,x);
};

function getSmaller(root,x){
    if(!root){
        return 0;
    }
    if(root.val === x){
        return root.smallerCount+getSmaller(root.right,x);
    }
    if(root.val<x){
        return root.smallerCount+getSmaller(root.right,x);
    }
    
    return getSmaller(root.left,x);
}

const red = 1;
const black = 0;
class RedBlackTreeNode{
    constructor(val,color){
        this.val = val;
        this.totalCount = 1;
        this.smallerCount = 1;
        this.color = color;
        this.left = null;
        this.right = null;
    }
}

function isRed(node){
    if(!node){
        return false;
    }
    return node.color === red;
}

function rotateLeft(h){
    const x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = red;
    x.totalCount = getTotalCount(x.left)+getTotalCount(x.right)+1;
    x.smallerCount = getTotalCount(x.left)+1;

    h.totalCount = getTotalCount(h.left)+getTotalCount(h.right)+1;
    h.smallerCount = getTotalCount(h.left)+1;
    return x;
}

function rotateRight(h){
    const x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = red;

    x.totalCount = getTotalCount(x.left)+getTotalCount(x.right)+1;
    x.smallerCount = getTotalCount(x.left)+1;

    h.totalCount = getTotalCount(h.left)+getTotalCount(h.right)+1;
    h.smallerCount = getTotalCount(h.left)+1;
    return x;
}

function flip(node){
    node.color = red;
    node.left.color = black;
    node.right.color = black;
}


function getTotalCount(root){
    if(!root){
        return 0;
    }
    return root.totalCount;
}

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */