# 三数之和
# Map,或set方法。
def threeSum(self, nums):
  if len(nums) < 3:
    return []
  nums.sort()
  # 首先排序
  res = set()
  for i, v in enumerate(nums[:-2]):
    if i >=1 and v == nums[i-1]:
      continue
    d = {}
    for x in nums[i+1:]:
      if x not in d:
        d[-v-x] = 1
      else:
          res.add((v, -v-x, x))
  return map(list, res)
