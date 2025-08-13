const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" }
]

const updateAgeByName = (people, name, newAge)=> {
    const person = people.find(person => person.name == name);
    if(person){
        person.age = newAge;
    }
    else{
        console.log(`${person?.name} is not found in this array!`);
    }
}

updateAgeByName(people, "Bob", 35);
console.log(people);