def maxSlidingWindow1 (self, nums, k):
  if not nums: return []
    # 判断如果存在非法
    window, res = [], []
    for i, x in enumerate(nums):
      if i >= k and window[0] <= i - k:
        # 元素超过了左键，就从window里删除
        window.pop(0)
      while window and nums[window[-1]] <= x:
        # x是每次新进入window里的元素，如果它比老大还大，就把x小的都退出
        window.pop()
      window.append(i)
      # 已经清理完后把x加入到window里，加入的是下标
      if i >= k-1:
        res.append(nums[window[0]])
    return res
    # 最后返回结果
    