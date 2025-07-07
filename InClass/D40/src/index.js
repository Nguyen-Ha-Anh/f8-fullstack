const arr = [
    ['id', 1],
    ['name', 'test'],
    ['age', 20]
]

const result = arr.reduce((acc, value) => {
    const [key, value] = value
    arr[key] = value
    return acc
})
console.log(result)
