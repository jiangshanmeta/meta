package pathsum112

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func hasPathSum(root *TreeNode, targetSum int) bool {
	if root == nil {
		return false
	}

	var dfs func(node *TreeNode, sum int) bool
	dfs = func(node *TreeNode, sum int) bool {
		sum += node.Val
		if node.Left == nil && node.Right == nil {
			return sum == targetSum
		}
		if node.Left != nil {
			left := dfs(node.Left, sum)
			if left {
				return true
			}
		}

		if node.Right != nil {
			right := dfs(node.Right, sum)
			if right {
				return true
			}
		}

		return false
	}

	return dfs(root, 0)

}
