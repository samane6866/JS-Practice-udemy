

const jonas = {
    firstName: "Jonas",
    lastName: "Schmeteedn",
    birthYear:1991,
    friends: ["Michael", "Peter", "Steven"],
    calAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    driverLicense: true,

    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()}years old and he has${this.driverLicense?"a" :"no"} driver license.`
    }
};



let challenge = console.log(`${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

console.log(challenge);


let driverLicense1 = `${jonas.firstName} is a ${jonas.calAge()} ${jonas.age >= 18 ? "he has driver license" : "he has not a driver licens"}`

console.log(driverLicense1)

console.log(jonas.getSummary())


let mark ={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
    calcBmi:function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
        
    }   
    
}

let john ={
    fullName:"John Smith",
    mass:78,
    height:1.69,
    calcBmi:function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
        
    }   
    
}


mark.calcBmi();
john.calcBmi();
console.log(mark.bmi, john.bmi);

 if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName} BMI ${john.bmi}` )
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName} BMI ${mark.bmi}`)
}