package convertsortedarraytobinarysearchtree108

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sortedArrayToBST(nums []int) *TreeNode {
	return trans(nums, 0, len(nums)-1)
}

func trans(nums []int, left int, right int) *TreeNode {
	if left > right {
		return nil
	}
	mid := (left + right) / 2
	root := TreeNode{
		Val:   nums[mid],
		Left:  trans(nums, left, mid-1),
		Right: trans(nums, mid+1, right),
	}
	return &root
}
