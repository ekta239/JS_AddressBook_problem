class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
            let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
            let addressRegex = /^[A-Za-z0-9\s]{4,}$/;
            let zipRegex = /^\d{6}$/;
            let phoneRegex = /^[6-9]\d{9}$/;
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
            if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
                throw new Error("Invalid Name! Should start with a capital and be at least 3 characters.");
            }
            if (!addressRegex.test(address) || !addressRegex.test(city) || !addressRegex.test(state)) {
                throw new Error("Invalid Address, City or State! Should have at least 4 characters.");
            }
            if (!zipRegex.test(zip)) {
                throw new Error("Invalid Zip! Should be exactly 6 digits.");
            }
            if (!phoneRegex.test(phone)) {
                throw new Error("Invalid Phone Number! Should be a 10-digit number starting with 6, 7, 8, or 9.");
            }
            if (!emailRegex.test(email)) {
                throw new Error("Invalid Email Address!");
            }
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

try{
let contact1 = new Contact("Ekta", "Verma", "Ayodhya Bypass", "Bhopal", "Madhya Pradesh", "462022", "6260881668", "ektav8231@gmail.com");
console.log("Contact Created:", contact1);
} catch (error) {
    console.error(error.message);
}
