package maximumdepthofbinarytree104

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return max(
		maxDepth(root.Left),
		maxDepth(root.Right),
	) + 1

}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
