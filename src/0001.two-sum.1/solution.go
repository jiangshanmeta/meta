package twosum1

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		index, ok := m[target-nums[i]]
		if ok {
			return []int{index, i}
		}
		m[nums[i]] = i
	}
	return []int{-1, -1}
}
