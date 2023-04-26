package congweidaotou100282

type ListNode struct {
	Val  int
	Next *ListNode
}

func reversePrint(head *ListNode) []int {
	result := []int{}
	var recursive func(head *ListNode)
	recursive = func(head *ListNode) {
		if head == nil {
			return
		}
		recursive(head.Next)
		result = append(result, head.Val)
	}
	recursive(head)
	return result
}
