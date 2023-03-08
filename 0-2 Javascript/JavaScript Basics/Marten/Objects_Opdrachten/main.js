//Object Constructor
let pet1 = new Object()

pet1.name = "Shinx"
pet1.species = "Cat"
console.log(pet1)

//Literal Constructor
let pet2 ={
    name: "Eva",
    species: "Cat"
}
console.log(pet2)
//Function Constructor
function Pet1(name,species){
    this.name = name
    this.species = species
}

let pet3 = new Pet1("Prins Bernhard", "Rabbit")
console.log(pet3)
//Singleton Constructor

let pet4 = new function(){
    this.name = "Anubis",
    this.species = "Cat"
}
console.log(pet4)
//Class-based Constructor
class Pet2{
    constructor(name,species){
        this.name = name
        this.species = species
    }
}

let pet5 = new Pet2("Gigi","Horse")
console.log(pet5)

console.log("The object constructor and the literal constructor have way more functions than the other three.")


pet_1 = Object.create(pet1)
console.log(pet_1)
pet_2 = Object.create(pet2)
console.log(pet_2)
pet_3 = Object.create(pet3)
console.log(pet_3)
pet_4 = Object.create(pet4)
console.log(pet_4)
pet_5 = Object.create(pet5)
console.log(pet_5)
console.log("With the funtion and class object the prototype changes to those types.")

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

person_array = [
    new Person("Sjaak", 20),
    new Person("Harry", 29),
    new Person("Magda", 34),
    new Person("Sjoerd", 35),
    new Person("Sarie", 33),
    new Person("Lis", 54),
    new Person("Freek", 35),
    new Person("John", 74),
    new Person("Trudy", 18),
    new Person("Tracy", 90),
]

person_array.sort((a, b) => a.name.localeCompare(b.name))
console.log(person_array)



class Contact_Information{
    constructor(adress, phone_number,contact){
        this.adress = adress
        this.phone_number = phone_number
        this.contact = contact
    }
}

class Club{
    constructor(name, type,amount_members, contact_information){
        this.name = name
        this.type = type
        this.amount_members = amount_members
        this.contact_information = contact_information
    }
}

contact_information_1 = new Contact_Information("Bliebblastraat","2344","Piet")

club_array = [
    new Club("PSV", "Soccer", 300, new Contact_Information("Blablastraat","1234","Sjaak")),
    new Club("Ajax", "Soccer", 300, new Contact_Information("WWstraat","234445","Henk")),
    new Club("Feyenoord", "Soccer", 300, new Contact_Information("Bloebstraat","1234","Arie")),
    new Club("Juventus", "Soccer", 300, contact_information_1),
    new Club("Sparta", "Soccer", 300, contact_information_1)
]

club_array.forEach((value)=>console.log(value.name +"|"+value.contact_information.phone_number+"|"+value.contact_information.contact))
contact_information_1.contact = "Harry"
club_array.forEach((value)=>console.log(value.name +"|"+value.contact_information.phone_number+"|"+value.contact_information.contact))