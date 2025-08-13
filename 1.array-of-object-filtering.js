const people = [
    {
        name : "sakib",
        age: 22,
        gender: "male"
    },
    {
        name : "sohan",
        age: 21,
        gender: "male"
    },
    {
        name : "ayesha",
        age: 12,
        gender: "female"
    },
    {
        name : "kaipa",
        age: 14,
        gender: "female"
    },
]

const findMale = (people) => {
    const male = people.filter(person => person.gender == "male");
    return male.map(person => person.name);
}

const male = findMale(people)
console.log(male);