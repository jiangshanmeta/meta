package binarytreelevelordertraversal102

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}
	result := [][]int{}
	var bfs func([]*TreeNode)
	bfs = func(levelNodes []*TreeNode) {
		vals := []int{}
		next := []*TreeNode{}
		for _, node := range levelNodes {
			vals = append(vals, node.Val)
			if node.Left != nil {
				next = append(next, node.Left)
			}
			if node.Right != nil {
				next = append(next, node.Right)
			}
		}
		result = append(result, vals)
		if len(next) > 0 {
			bfs(next)
		}
	}
	bfs([]*TreeNode{root})
	return result
}
