//১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
/*
function leapYear(year) {

    if (year % 4 == 0) {
        return true
    } else if (year % 4 != 0) {
        return false
    }
}
var years = 2024
var total = leapYear(years)
console.log(total)*/

//২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
/*
function ageCheck(age) {
    if (age % 2 == 0) {
        return true
    } else if (age % 2 != 0) {
        return false
    }
}
var ageInput = 13
var total = ageCheck(ageInput)
console.log(total)
 */
//৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

/* 
function inputHour(hour) {
    var cal = hour * 60
    return cal
}
var hours = 5
var total = inputHour(hours)
console.log('Total miniute is', total)
*/


