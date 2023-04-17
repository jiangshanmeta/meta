package sumofroottoleafbinarynumbers1079

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumRootToLeaf(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return dfs(root, 0)
}

func dfs(root *TreeNode, num int) int {
	num = num*2 + root.Val
	if root.Left == nil && root.Right == nil {
		return num
	}
	sum := 0
	if root.Left != nil {
		sum += dfs(root.Left, num)
	}
	if root.Right != nil {
		sum += dfs(root.Right, num)
	}

	return sum
}
