const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "Tesla", model: "Model 3", year: 2020 }
];

const sortCarsByYear = (cars) => {
    const sortedCars = cars.sort((a,b) => a.year - b.year);
    return sortedCars;
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);