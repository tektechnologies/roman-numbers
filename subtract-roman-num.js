console.log('Subtract, Roman numbers.');




let roman1 = "XV"; //15
let roman2 = "X"; //10

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


function romanToInt(stringOfNumbers) {
    console.log('roman numeral', stringOfNumbers);
    let totalCount = 0;

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


let romanValue1 = romanToInt(roman1);
let romanValue2 = romanToInt(roman2);

console.log('conversion results: ', romanValue1, romanValue2);

///////////////////////

function intToRoman(numResults) {
    console.log('in the int to roman ():', numResults);
    if (numResults <= 0) {
        return 'Invalid Results';
    }
    let romanNumArrayValues = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"],
        [1, "I"]
    ];
    let stringNumResult = "";
    let i = 0;
    while(numResults > 0){
        if(numResults >= romanNumArrayValues[i][0]){
            stringNumResult = stringNumResult + romanNumArrayValues[i][1];
            //subtracting array numbers from the numResults
            console.log(stringNumResult)
            numResults -= romanNumArrayValues[i][0];
        } else {
            i++;
        }
    }
  return stringNumResult;
}

let result = romanValue1 - romanValue2;
let resultToRoman = intToRoman(result);
console.log('results to roman: ', resultToRoman);

console.log(`The results of ${roman1} and ${roman2} = ${resultToRoman}`);