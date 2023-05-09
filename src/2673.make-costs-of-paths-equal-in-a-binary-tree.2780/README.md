# Make Costs of Paths Equal in a Binary Tree

At first, let's only consider two brother leaf nodes. Since the paths from root to these two nodes are same except for the last node, we need to make these two brother nodes' value same.

Then we go to the second last level and also only consider brother nodes. We name these two nodes A and B . We define the cost from A to any of its child leaf node is COSA. Similarly, we define the cost from B to any of its child leaf node is COSB. We want that COSA equals to COSB. The minimum costy way is to update A or B.

We do the same procedure until we meet the root node.

In order to get COSA easily, we can update node's value to the total cost from A to its leaf node.
