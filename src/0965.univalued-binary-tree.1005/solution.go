package univaluedbinarytree1005

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isUnivalTree(root *TreeNode) bool {
	if root == nil {
		return true
	}

	return fn(root.Left, root.Val) && fn(root.Right, root.Val)
}

func fn(node *TreeNode, target int) bool {
	if node == nil {
		return true
	}
	return node.Val == target && fn(node.Left, target) && fn(node.Right, target)
}
