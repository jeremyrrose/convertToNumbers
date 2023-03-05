const convertToNumbers = (arr) => {

    // YOUR CODE HERE

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
