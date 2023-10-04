const num = [1,2,3,4,5]
const copy = [...num]

num.unshift(9)

console.log(num[0] + ' ' + copy[0])