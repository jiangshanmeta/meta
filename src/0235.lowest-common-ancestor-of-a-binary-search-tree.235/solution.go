package lowestcommonancestorofabinarysearchtree235

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if p.Val > q.Val {
		tmp := p
		p = q
		q = tmp
	}

	return find(root, p, q)
}

func find(root, p, q *TreeNode) *TreeNode {
	if root == p || root == q {
		return root
	}
	if root.Val > p.Val && root.Val < q.Val {
		return root
	}
	if root.Val < p.Val {
		return find(root.Right, p, q)
	} else {
		return find(root.Left, p, q)
	}

}
