/* const numbers = [45, 12, 78, 78]
let sum = 0
for (let i = 0; i < 4; i++) {
    let number = numbers[i]
    sum = sum + number
    //console.log(number)
}
console.log(sum) */

function numbers(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {

        const element = num[i]
        sum = sum + element
        //console.log(sum)
    }
    return sum
}
const total = numbers([2, 12, 2, 4])
console.log(total)
