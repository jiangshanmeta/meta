package offer100260

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	dummyHead := ListNode{}
	for head != nil {
		n := head.Next
		head.Next = dummyHead.Next
		dummyHead.Next = head
		head = n
	}
	return dummyHead.Next
}
