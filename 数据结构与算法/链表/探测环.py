def hasCycle(self, head):
  fast = slow = head
  # 初始化两个指针都指向head
  while slow and fast and fast.next:
    # 慢指针走一步,块指针走两边
    slow = slow.next
    fast = fast.next.next
    # 如果碰撞到了就是有循环
    if slow is fast:
      return True
  return False