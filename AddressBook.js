class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
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


let contact1 = new Contact("Ekta", "Verma", "Aypdhya Bypass", "Bhopal", "Madhya Pradesh", "462022", "6260881668", "ektav8231@gmail.com");
console.log("Contact Created:", contact1);