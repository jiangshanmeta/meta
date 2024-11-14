package lcof100298

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	dummyHead := ListNode{}
	for head != nil {
		next := head.Next
		head.Next = dummyHead.Next
		dummyHead.Next = head
		head = next
	}
	return dummyHead.Next
}
