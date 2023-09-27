// Destructuring data in case of Array

const hobbies = ["sport", "cooking"];

const [hobby1, hobby2] = hobbies;

console.log(hobbies);


// Destructuring data in case of object

const personInfo = {
    herName: "Angela",
    herAge: 32,
    herJob:"dr"
}

const { herName, herAge } = personInfo;

console.log({herAge,herName});