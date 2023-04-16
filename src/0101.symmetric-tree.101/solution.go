package symmetrictree101

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return isSymmetricHelper(root.Left, root.Right)
}

func isSymmetricHelper(node1 *TreeNode, node2 *TreeNode) bool {
	if node1 == nil && node2 == nil {
		return true
	}
	if node1 != nil && node2 != nil {
		return node1.Val == node2.Val && isSymmetricHelper(node1.Left, node2.Right) && isSymmetricHelper(node1.Right, node2.Left)
	}
	return false
}
