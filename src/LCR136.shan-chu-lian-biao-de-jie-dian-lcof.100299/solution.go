package shanchulcof100299

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(head *ListNode, val int) *ListNode {
	if head == nil {
		return head
	}
	if head.Val == val {
		return deleteNode(head.Next, val)
	}
	head.Next = deleteNode(head.Next, val)
	return head
}
