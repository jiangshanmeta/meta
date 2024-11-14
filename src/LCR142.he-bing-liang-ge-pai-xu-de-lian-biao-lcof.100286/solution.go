package lcof100286

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	dummyHead := ListNode{}
	last := &dummyHead

	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			n := l1.Next
			last.Next = l1
			l1.Next = nil
			last = last.Next
			l1 = n
		} else {
			n := l2.Next
			last.Next = l2
			l2.Next = nil
			last = last.Next
			l2 = n
		}
	}
	if l1 != nil {
		last.Next = l1
	}
	if l2 != nil {
		last.Next = l2
	}
	return dummyHead.Next
}
