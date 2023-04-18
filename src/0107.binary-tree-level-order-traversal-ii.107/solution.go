package binarytreelevelordertraversalii107

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrderBottom(root *TreeNode) [][]int {
	result := [][]int{}
	if root == nil {
		return result
	}

	var bfs func([]*TreeNode)
	bfs = func(nodes []*TreeNode) {
		vals := []int{}
		next := []*TreeNode{}
		for _, node := range nodes {
			vals = append(vals, node.Val)
			if node.Left != nil {
				next = append(next, node.Left)
			}
			if node.Right != nil {
				next = append(next, node.Right)
			}
		}
		if len(next) > 0 {
			bfs(next)
		}
		result = append(result, vals)
	}
	bfs([]*TreeNode{root})
	return result
}
