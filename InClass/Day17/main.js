// /* reduce */

// const array1 = [ 1, 2, 3, 4, 5];

// // 0 + 1 + 2 + 3 + 4 + 5
// const initiaValue = 0

// const sumWithInitial = array1.reduce((a, b) => {
//     console.log(a, b)
//     return a + b
// }, 0);

// console.log(sumWithInitial)

/* 
*
**/

// const arr = [
//     ['id', 1],
//     ['name', 'test'],
//     ['age', 20],
// ]

/* 
* {
* id: 1,
* name: 'test',
* age: 20
* }
*
* for / reduce
**/

/* reduce **/

// const initialValue = arr.reduce((a, [key, value]) => {
//     a[key] = value
//     return a
// },{})

// console.log(initialValue)


/* for **/

// const result = {}

// for (const e of arr) {
//     const key = e[0]
//     const value = e[1]
//     result[key] = value
// }

// console.log(result)


// /** lọc phần tử trùng nhau = set */

// const a = [1, 1, 1, 2, 2, 3, 3]

// const c = Array.from(new Set(a))
// console.log(c)


const arr = [1, 7, 3, 2, 5, 8, 2]

/**
 * log ra những phéo tính cộng có kết quả = 4
 * 
 * 1 + 3 = 4
 * 2 + 2 = 4
 */

for (let i = 0; i < arr.length; i++) {
    const a = arr[i]
    for (let z = i + 1; z < arr.length; z++) {
        const b = arr[z]
        if (arr[i] + arr[z] === 4) {
            console.log(a + ' + ' + b + ' = 4')
        }
    }
}

/**
 * cach lam khac
 * 
 * const sum = 4
 * for(const e of arr) {
 *      const }
 */

for (let i = 0; i < arr.length; i++) {
    for (let z = i + 1; z < arr.length; z++) {
        if (arr[i] + arr[z] === 4) {
            console.log('vị trí ' + i + ' + vị trí ' + z + ' = 4')
        }
    }
}

/** log ra vị trí các số cộng lại = 4 
 * 
 * vi tri 0 + vi tri 2 = 4
 * vi tri 3 + vi tri 4 = 4
 */

/**
 * cách làm khác bài 2
 * dùng map
 */

const arr = [1, 7, 3, 2, 5, 8, 2]

const map = {}

arr.forEach((e, i) => {
    map[e] = i
})

console.log(map)

const arr = [1, 7, 3, 2, 5, 8, 2]

let result = 1

while (arr.includes(result)) {
    result += 1
}

console.log(result)





