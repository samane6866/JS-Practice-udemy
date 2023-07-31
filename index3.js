// function declaration
// in function declaration we can call the function before initialization and this is the main diffrance with  function expression.

function calAge(birthYear) {
    return 2035 -birthYear
}
const age1 = calAge(1993)
console.log(age1);


// function expression

const calAge2 = function (birthYear) {
    return 2040 - birthYear;
}
const age2 = calAge2(1993);

console.log(age1, age2);

// Arrow function

const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1993);

const retirementYear = (birthYear, firstName) => {
    const age = 2030 - birthYear;
    const retirementAge = 65 - age;
    return (`${firstName} will retires in ${retirementAge} years`);
}

console.log(retirementYear(1993, "sam"))



function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruittProcessor(apples, oranges) {
    
    const appelPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${appelPieces} piece of apple and ${orangePieces} piece of orange`
    return juice;
}

console.log(fruittProcessor(2, 4));