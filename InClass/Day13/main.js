/*
* kiem tra so chinh phuong: so a
* -> lay can bac 2: a** (1/2)
* a ** (1/2) % 1 === 0 
yes - so chinh phuong
no - not chinh phuong
**/





/*
array: mảng / list 

**/
const numbers = [1, 2, 3, 4, 5] // dùng ngoặc vuông
const boxes = ['A' , 'B' , 'C']

let a = [1, 2]
a= [3, 4, 89, 9120]
console.log(a.length) // độ dài: length

const length = a.length // 4
const toString = a.toString() // String(a) = '3, 4, 98, 9120'
console.log(a.toString())
console.log(String(a)) // ép kiểu về String

console.log(a[0])

// ad more at last
a.push(88)
console.log(a)

// adđ more at first
a.unshift(99)
console.log(a)

// thay đổi value
a[0] = 98
console.log(a)

// xoá phần tử cuối delete at last
a.pop()
console.log(a)

// xoá phần tử đầu tiên
a.shift()

console.log(a.join('-'))
// hàm join 

//muốn sắp xếp lại giá trị
a.sort()
console.log(a)
delete a [2]
console.log(a)

const b = [1, 2, 3] // number
const c = ['mot', 'hai'] // string
const d = [4, 5, 6]
console.log(c.concat(b, d, d))
//concat: truyền vào nhiều biến

//ARRAY trong ARRAY





/* object cũng dùng để tập hợp thông tin (value) lại với nhau giống như array

array: a[10, 3, 23] -> get value by index

object get value by key 
**/

const info = {
    name:'doanh',
    age: 21,
    address: 'quat lam',
    favoriteNumber: [8, 88],
}
console.log(info['name'], info.name)
// quan trọng SOS

info.name = 'viet'
info.xxx = null