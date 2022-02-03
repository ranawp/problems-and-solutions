

function numbers(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {

        const element = num[i]
        sum = sum + element

    }
    return sum
}
const total = numbers([2, 12, 2, 4])
console.log(total)
