
//problem number 1
//১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

const num = [45, 78, 56, 12]
console.log(Math.min(...num));

//problem2
//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।


var num1 = 20
var num2 = 45
var num3 = 55
console.log(Math.min(num1, num2, num3))


//problem 3
//৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।



function numbers(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        sum = sum + element;

    }
    return sum / num.length

}
let inputNum = [45, 78, 12, 89, 32]
let total = numbers(inputNum)
console.log(total)



//problem 4
//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।


function value(length, width) {
    var cal = length * width;
    return cal;
}
var firstNum = 5;
var lastNum = 3;
var input = value(firstNum, lastNum)
console.log(input)

//another way of problem4
function value(length, width) {
    var cal = 2 * (length + width)
    return cal
}
var firstNum = 5
var lastNum = 3
var input = value(firstNum, lastNum)
console.log('Result is', input)


//৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

function getMax(numbers) {
    var maxNum = Math.max.apply(null, numbers)
    numbers.splice(numbers.indexOf(maxNum), 1)
    console.log(Math.max.apply(null, numbers))
}

let input = [12, 45, 99, 89, 46]
let result = getMax(input)

//note: there has two ways to get max number from an array
//first way is use apply syntex
var a = [45, 78, 56, 12]
var result = Math.max.apply(null, a) //what is null??
console.log(result)

//this is another way to get max number
var a = [45, 78, 56, 12]
console.log(Math.max(...a))  
