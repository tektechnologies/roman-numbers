console.log('Compare 2 Roman Numbers');
//Define the two comparable Roman Numbers
let romanNum1 = 'X';
let romanNum2 = "IX";

let romanNumData = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
console.log('roman data: ', romanNumData);
let totalCount = 0;



function romanToInt(stringOfNumbers) {
    console.log('roman numeral', stringOfNumbers);

    for (let i = 0; i < stringOfNumbers.length; i++) {
        let currentInt = romanNumData[stringOfNumbers.charAt(i)];
        let nextInt = romanNumData[stringOfNumbers.charAt(i + 1)];

        if (nextInt) {
            console.log('Checking for a next: ', nextInt);
            if (currentInt >= nextInt) {
                totalCount += currentInt;
            } else {
                totalCount += (nextInt - currentInt);
                i++;
            }
        } else {
            console.log('We have no more nextInt, so add the final number to the total count', currentInt);
            totalCount += currentInt;
        }
    }
    return totalCount;
}




//invoke the roman to int function and save the results to compare in :
let romanValue1 = romanToInt(romanNum1);
let romanValue2 = romanToInt(romanNum2);

console.log('conversion results: ', romanNum1, romanNum2);


if (romanNum1 > romanNum2) {
    console.log(`${romanNum1} is greater than ${romanNum2}`);

} else if (romanNum2 > romanNum1) {
    console.log(`${romanNum1} is less than ${romanNum2}`);

} else {
    console.log(`${romanNum1} is equal to ${romanNum2}`);
}