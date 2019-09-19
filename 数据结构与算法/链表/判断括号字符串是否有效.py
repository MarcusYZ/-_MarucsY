# 第一种写法:
def isValid(self, s):
  stack = []
  paren_map = {')':'(', ']':'[', '}':'{'}
  for c in s:
    if c not in paren_map:
      # 首先元素不在map中就不是）就放到stack里。
      stack.append(c)
    elif not stack or paren_map[c] != stack.pop():
      # 首先判断栈是否有元素，若有看是否匹配
      return False
      # 不合法就 False
  return not stack
      # 最后不为空就是合法的

# 第二种写法
# public boolean isValid(String s) {
#   int length;
#   do {
#     length = s.length();
#     s = s.replace("()","").replace("{}", "").replace("[]", "");
#   } while (length != s.length());
#   return s.length() == 0;
# }
# 把一对的消掉，最后不剩就是正确的