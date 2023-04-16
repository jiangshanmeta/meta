package mergesortedarray88

func merge(nums1 []int, m int, nums2 []int, n int) {
	index := len(nums1) - 1
	n--
	m--
	for n > -1 && m > -1 {
		if nums1[m] > nums2[n] {
			nums1[index] = nums1[m]
			index--
			m--
		} else {
			nums1[index] = nums2[n]
			index--
			n--
		}
	}
	for n > -1 {
		nums1[index] = nums2[n]
		index--
		n--
	}

}
