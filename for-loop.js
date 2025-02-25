console.log('for-loop.js');



let romanToInt = function(stringOfNumbers){
    console.log()
    let romanNumToInteger ={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100, 
        D: 500, 
        M: 1000
    }
    console.log('Roman to Number: ', romanNumToInteger);
    let totalCount;
    for (let i = 0; i < stringOfNumbers.length; i++){
        //get the 'current'  char/nodeLL which is the starting Roman Numberal Character
        let currentInt = romanNumToInteger[stringOfNumbers.charAt(i)];
        console.log('Current Node: ', currentInt);
        let nextInt = romanToInt[stringOfNumbers.charAt(i + 1)];
        console.log('Current.next() : ', nextInt);



        //happy path (if the current Roman Numberal is larger than the next Roman Numberal)
        if(currentInt >= nextInt){
            total += currentInt;
        } 
    }




}





romanToInt('MDLI');