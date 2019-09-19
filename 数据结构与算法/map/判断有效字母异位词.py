# 使用Map
def isAnagram1(self, s, t):
  dic1, dic2 = {}, {}
  # 创建两个Map计数
  for item in s:
    dic1[item] = dic1.get(item, 0) + 1
  for item in t:
    dic2[item] = dic2.get(item, 0) + 1
  return dic1 == dic2
  # 最后判断是否相等

# 不用Map而是用用哈希表

def isAnagram2 (self, s, t):
  dic1, dic2 = [0] *26, [0]*26
  for item in s:
    dic1[ord(item)-ord('a')] +=1
  for item in t:
    dic2[ord(item)-ord('a')] +=1
  return dic1 == dic2
