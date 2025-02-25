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
        } else {
            //if the next Roman Numberal is greater than Current subtract the lesser/current from the next. 
            total += (nextInt - currentInt);
            //move the to the next setup of nodes here with one ++
            i++; // which starts the move with the for loop i++ adding the second move so that we with current.next and current.next().next();
        }
    }




};





romanToInt('MDLI');