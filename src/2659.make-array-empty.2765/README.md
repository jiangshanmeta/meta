# Make Array Empty

At first, we need to transform the original array into relative rank array.

```typescript
const sorted = [...nums, ].sort((a, b) => a - b);
const map = new Map<number, number>();
for (let i = 0; i < sorted.length; i++) {
    map.set(sorted[i], i);
}

nums = nums.map((num) => map.get(num)!);
const map2 = new Map<number, number>();
for (let i = 0; i < nums.length; i++) {
    map2.set(nums[i], i);
}
```

In this way, we can get previous removed number and its index easily.

For example, we have a number x, the previous removed number is x-1, and its index is map2.get(x-1).

Every turn, we remove a sequence of numbers. Formally, we call this sequence A[i], and for every ```i<A.length-1```, ```A[i]+1 == A[i+1]```. And A[0] elements have been removed before this turn.
