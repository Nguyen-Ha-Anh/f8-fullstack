// const arr = [1, 2, 3, 4]

//create new array
//formular new e = 2 * old e
// array.map

// const newArr = arr.map ((e) => e * 2)

// console.log(newArr)

// dùng hàm filter

    // const members = [
    //     {id: 1, name: 'Viet', age: 21},
    //     {id: 1, name: 'Duc', age: 22}
    // ]

    // const membersName = members.map(e => e.name)

    // // console.log(membersName)

    // // vòng for thuần
    // members.forEach ((e) => {
    //     console.log (e)
    // })


    const colors = [
        { id: 1, name: 'Red' },
        { id: 2, name: 'Blue' },
    ];
    
    const flowers = [
        { id: 1, name: 'Rose', colorId: 1 },      // Red
        { id: 2, name: 'Tulip', colorId: 2 },     // Blue
        { id: 3, name: 'Carnation', colorId: 1 }, // Red
    ];


    // [
    //     { id: 1, name: 'Rose', colorId: 1, color: 'Red' },
    //     { id: 2, name: 'Tulip', colorId: 2, color: 'Blue' },
    //     { id: 3, name: 'Carnation', colorId: 1, color: 'Red' }
    // ]]

    const result = flowers.map(flower => ({
        ...flower,
        color: colors.find(c => c.id === flower.colorId)?.name
      }));
      
      console.log(result);