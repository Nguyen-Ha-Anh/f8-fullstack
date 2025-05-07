// Bai 4

// arr = [33, 11, 22, 12, 35, 29]

// console.log(arr)

// for(let j = 0; j < arr.length - 1; j++) {
//     for (let i = 0; i < arr.length - 1 - j; i++) {
//         const curValue = arr[i]
//         const nextValue = arr[i + 1]

//         if (curValue > nextValue) {
//             arr[i] = nextValue
//             arr[i + 1] = curValue
//         }
//     }
//     console.log(arr)
// }

// console.log(arr)
   
const animal = {
    name: 'Viet',
    legs: 4,
    speaking()  {
        console.log('hi')
    }
}


function test(x, y) {
    const a = 1
    console.log('test thui x = ', x, 'y =', y)
    return 'hello anh em'
}

console.log (test(100, 800))

function test (x) {
    // if (x > 5) console.log(x)
    if (x < 5) return
    console.log(x)
}

//2015
// const log = (x) => {
//     console.log(x)
// }

// const log= (x) => x  100 // lambda

// console.log(log ('hihi'))

// const members = [
//     {id: 1, name: 'Viet', age: 21}
//     {id: 1, name: 'Duc', age: 22}
// ]
// console.log (members[1].name)
