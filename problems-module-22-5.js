/* let n = 7
while (n < 19) {
    n = n + 2
    console.log(n)
}
 */
// var a = [12, 45, 78, 65, 89, 12]
// //console.log(a.length)
// // a[4] = 5

// // a.push(2)
// a.pop()
// console.log(a)

// var a = [12, 45, 78, 23]
// for (var i = 0; i < a.length; a++) {
//     console.log(a)
// }

// function multiply(num1, num2, num3) {
//     var a = num1 * num2 * num3
//     return a
// }
// console.log(multiply(3, 3, 3))

// var mobile = {
//     price: 12,
//     color: 'red',
//     model: 14
// }
// mobile['price'] = 2
// console.log(mobile)
//তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো ।
/*
var a = [12, 78, 89, 65, 125, 98]
for (var i = 0; i < a.length; i++) {
    if (a[i] > 80) {
        console.log(a[i])
    }
} */


//১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
/* 
function feetToInch(feet) {
    let cal = feet * 12
    return cal
}
let inputFeet = 5
let result = feetToInch(inputFeet)
console.log(result) */

//২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
/* 
function centimeterToMeter(centimeter) {
    let centTometer = centimeter * 0.01
    return centTometer
}
let inputCentimeter = 5
let result = centimeterToMeter(inputCentimeter)
console.log(result) */

//৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। এইবার ভালো করে খেয়াল করো।প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
/* 
function paperRequirements(firstBook, secondBook, thirdBook) {
    let firstBookpaper = firstBook * 100
    let secondBookPaper = secondBook * 200
    let thirdBookPaper = thirdBook * 300
    let totalPaperCount = firstBookpaper + secondBookPaper + thirdBookPaper
    return totalPaperCount
}
let firstBookCopy = 1
let secondBookCopy = 1
let thirdBookCopy = 1
let result = paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy)
console.log(result) */

//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  

function bestFriend(bestFriendName) {
    for (let i = 0; i < bestFriendName.length; i++) {
        let a = bestFriendName[i].length
        let max = Math.max(a)
        return max
    }
}
let names = ['Bristy', 'Sriti', 'Menoka', 'Banna']
let result = bestFriend(names)
console.log(result)



//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
/* let numbers = [5, -6, 9, -2, 75, 12]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        console.log(numbers[i])
    }
} */




