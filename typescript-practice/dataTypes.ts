//This is Assignment 1 to do the ands on in declarin the vaiables with data types in typescript

//1. Temperature of a city in degrees Celsius: 25.5
let temp: number = 25.5;
console.log(`Temperature of te city in degrees Celsius: ${temp}`);

//2. Whether a customer has placed an order: true or false
let orderStatus: boolean = true;
console.log(`Whether a customer has placed an order: ${orderStatus}`);

//3. Person's phone number: "123-456-7890"
let phoneNumber: string = "123-456-7890";
console.log(`Person's phone number: ${phoneNumber}`);

//4. Amount of money in a customer's bank account: 1000.50
let availableBal: number = 1000.50;
console.log(`Amount of money in a customer's bank account: ${availableBal}`);

//5. Person's email address: "john.doe@example.com"
let email: string = "john.doe@example.com";
console.log(`Person's email address: ${email}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let coordinates: [number, number] = [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${coordinates}`);

//7. Person's marital status: true or false
//8. Person's occupation: "Software Engineer"
//9. Person's favourite colour: "Blue"
//3. Person's phone number: "123-456-7890"
//13.Person's blood type: 'A'
//18.Person's eye color: "Brown"
//19.Person's birthplace: "New York City"
interface personInfo{
    maritalStatus: boolean,
    occupation: string,
    favouriteColour: string,
    phoneNumer: string,
    bloodType: string,
    eyeColor: string,
    birthPlace: string
}

let person: personInfo = {
    maritalStatus: true,
    occupation: "Software Engineer",
    favouriteColour: "Blue",
    phoneNumer: "123-456-7890",
    bloodType: "'A'",
    eyeColor: "Brown",
    birthPlace: "New York City"
}

console.log(`Person's marital status: ${person.maritalStatus}, Person's occupation: ${person.occupation}, Person's favourite colour: ${person.favouriteColour}, Person's phone number: ${person.phoneNumer}, Person's blood type: ${person.bloodType}, Person's eye color: ${person.eyeColor}, Person's birthplace: ${person.birthPlace}`);

//10.Current year: 2023
let currentYear: number = 2023; //to show current year as 2023
console.log(`Hardcode Current year ${currentYear}`)
let currentDate = new Date();
console.log(`Dynamic Current Year ${currentDate.getFullYear()}`);

//11.Number of followers on a social media platform: 1,000,000
let followers: number = 1000000;
console.log(`Number of followers on a social media platform: ${followers}`);
console.log(`Number of followers on a social media platform: ${followers.toLocaleString()}`); //formatting

//12.Rating of a movie: 7.5
let rating: number = 7.5
console.log(`Rating of a movie: ${rating}`);

//14.Title of a book: "To Kill a Mockingbird"
let title: string = "To Kill a Mockingbird";
console.log(`Title of a book: ${title}`);

//15. Number of employees in a company: 500
let empCount: number = 500;
console.log(`Number of employees in a company: ${empCount}`);

//16. Time of an event: 2:30 PM
let eventTime: string = "2:30 PM"
console.log(`Time of an event: ${eventTime}`);

//17. Name of a country: "United States"
let country: string = "United States";
console.log(`Name of a country: ${country}`);

//20. Distance between two cities: 200.5
let distanceBetTwoCities: number = 200.5;
console.log(`Distance between two cities: ${distanceBetTwoCities}`);



