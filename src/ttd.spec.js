// TTD - test driven development approach is where we write tests (what we expect from code) and then write code (for that specific test). The following is red, green, refactor ttd approach where we write tests (which fails since code to be test doesn't exits yet), then we write code for that specific test (here the test shall pass), then we refactor code and test if required to optmize or clean it up.

import Sum from "./ttd";

// Following fails since we didn't define our function but only what function is supposed to do - Red
// it('Should return sum of 2 numbers', () => {
//     const a = 4;
//     const b = 7;
//     const expect = 11;
//     const sum = myfunction(a,b);
//     expect(sum).toEqual(expect)
// })

// We have defined our function called as Sum in separate file and now we can test it - Green
it('Should return sum of 2 numbers', () => {
    const a = 4;
    const b = 7;
    const expected = 11;
    const sum = Sum(a,b);
    expect(sum).toEqual(expected)
})

// We can refactor our code - one that is to be tested or this test itself. Here we can reduce unnecessary code by removing variable declarations since we are not really going to change inout and expected value. - Refactor

it('should return sum of any 2 numbers', () => {
    expect(Sum(4,7)).toEqual(11)
})