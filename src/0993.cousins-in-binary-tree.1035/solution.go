package cousinsinbinarytree1035

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isCousins(root *TreeNode, x int, y int) bool {
	if root == nil || x == y {
		return false
	}

	var bfs func([]*TreeNode) bool
	bfs = func(nodes []*TreeNode) bool {
		count := 0
		next := []*TreeNode{}
		for _, node := range nodes {
			bro := 0
			if node.Left != nil {
				next = append(next, node.Left)
				if node.Left.Val == x || node.Left.Val == y {
					count++
					bro++
				}
			}
			if node.Right != nil {
				next = append(next, node.Right)
				if node.Right.Val == x || node.Right.Val == y {
					count++
					bro++
				}
			}
			if bro == 2 {
				return false
			}
		}
		if count == 2 {
			return true
		} else if count == 1 {
			return false
		}
		if len(next) > 0 {
			return bfs(next)
		}
		return false
	}
	return bfs([]*TreeNode{root})

}
