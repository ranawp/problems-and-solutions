/* function addNum(num1, num2, num3) {
    var number = (num1 + num2 + num3)
    return number

}
console.log(addNum(20, 12, 15)) */

//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
/* function valuePair(celcius) {
    var cal = (celcius * 1.8) + 32
    return cal
}
var inputValue = 1
var total = valuePair(inputValue)
console.log(total) */

//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
/*
function valuePair(farenhight) {
    let cal = (farenhight - 32) * 5 / 9
    return cal
}
let inputValue = 2
let total = valuePair(inputValue)
console.log(total) */

//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।
/*
function marksValue(marks) {
    if (marks >= 80 && marks <= 100) {
        return ('You got A+')
    } else if (marks >= 70 && marks <= 79) {
        return ('You got A')
    } else if (marks >= 60 && marks <= 69) {
        return ('You got A-')
    } else if (marks >= 50 && marks <= 59) {
        return ('you got B')
    } else if (marks >= 40 && marks <= 49) {
        return ('you got C')
    } else if (marks >= 33 && marks <= 39) {
        return ('You got D')
    } else if (marks >= 33 && marks <= 0) {
        return ('You got F')
    } else {
        console.log('Number is invalid')
    }
}
var marksInput = 60
var total = marksValue(marksInput)
console.log(total)
 */

//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

/* 
function inputValue(capital, time, interestRate) {
    var cal = (capital * time * interestRate) / 100
    return cal
}
var capitalInput = 2
var timeInput = 2
var interestRateInput = 5
var total = inputValue(capitalInput, timeInput, interestRateInput)
console.log('Your interset amount is', total) */


