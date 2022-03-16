const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');
test("One euro should be 1.206 dollars",() =>{
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)


    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 116.32 Yens",() =>{
    const Yens = fromDollarToYen(3.5)

    const expected = 3.5 * 116.32; 
    

     expect(Yens).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One yen should be 0.0066 euros",() =>{
  
    

 
    const pounds = fromYenToPound(3.5)


    const expected = 3.5 * 0.0066; 
    

     expect(pounds).toBe(expected); 
})