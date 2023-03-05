
const convertToNumbers = (arr) => {
    
    // YOUR CODE HERE

    const numberWords = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    // const returnArray = []

    // for (let i = 0; i < arr.length; i++) {
    //     const converted = Number(arr[i])
        
    //     if (converted) {
    //         returnArray.push(converted)
    //     } else {
    //         const convertedByObject = numberWords[arr[i]]
    //         if (convertedByObject) {

    //             returnArray.push(convertedByObject)

    //         } else {
                
    //             returnArray.push(10)

    //         }
    //     }
    // }

    return arr.map(item => Number(item) || numberWords[item] || 10)

}

//
// please do not edit below :)
//

// inputs and outputs
const testCase = [
    1, 4,"five", 2, "six", "tacos", "4", 
    5, "nope", 7, "7", "help!", 9, "nine", 
    5, "3", "three", 9, "2", 8, "two"
]

const expectedResult = [
    1,  4, 5, 2,  6, 10, 4,
    5, 10, 7, 7, 10,  9, 9,
    5,  3, 3, 9,  2,  8, 2
]

// test feedback
const result = convertToNumbers(testCase)
console.log("YOUR RESULT:")
console.log(result)

console.log("\nYOU SHOULD SEE:")
console.log(expectedResult)

if (Array.isArray(result) && result.every((item,index) => item === expectedResult[index])) {
    console.log("\nNAILED IT")
} else {
    console.log("\nGive it another shot!")
}
