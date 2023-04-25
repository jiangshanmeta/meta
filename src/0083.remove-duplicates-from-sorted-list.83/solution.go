package removeduplicatesfromsortedlist83

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	head.Next = remove(head.Next, head.Val)
	return head
}

func remove(head *ListNode, prev int) *ListNode {
	if head == nil {
		return head
	}
	if head.Val == prev {
		return remove(head.Next, prev)
	}
	head.Next = remove(head.Next, head.Val)
	return head
}
