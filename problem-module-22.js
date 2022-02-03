//১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  
/* function widthPerameter(width1, width2, width3) {
    let widthCalculation = width1 * width2 * width3
    console.log(widthCalculation)

}
num1 = 4
num2 = 4
num3 = 4
inputWidth = widthPerameter(num1, num2, num3) */

//another formula use to solve this problem 
/* function widthPerameter(width1, width2, width3) {
    let widthCalculation = (width1 + width2 + width3) / 2
    console.log(widthCalculation)

}
num1 = 4
num2 = 4
num3 = 4
inputWidth = widthPerameter(num1, num2, num3) */

//২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function primeNum(number) {
    let count = 0
    for (let i = 1; i < count; i++) {
        if (number % i == 0) {
            console.log('this is prime number')
        }
    }
}
let inputNum = 20
let result = primeNum(inputNum)