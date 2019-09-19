var two = 0.2
var one = 0.1
var eight = 0.8
var six = 0.6[two - one == one, eight - six == two]

// 第一个是true ，因为IEEE754标准不能准确表示小数

// 0.2 - 0.1 = 0.1 可以表示 因为后面两个数字相等。