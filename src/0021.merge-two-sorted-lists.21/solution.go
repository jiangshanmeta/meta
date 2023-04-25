package mergetwosortedlists21

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummyHead := &ListNode{}
	last := dummyHead

	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			next := list1.Next
			list1.Next = nil
			last.Next = list1
			last = list1
			list1 = next
		} else {
			next := list2.Next
			list2.Next = nil
			last.Next = list2
			last = list2
			list2 = next
		}
	}

	if list1 != nil {
		last.Next = list1
	} else if list2 != nil {
		last.Next = list2
	}
	return dummyHead.Next
}
