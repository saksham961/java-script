 // concat() method is used to combine two or more arrays and returns a new array.

 let Marvels = ["IronMan", "spiderman", "Hulk","Thor"]
 let cars = ["porsche","mercedes","bmw","Audi"]

let both = Marvels.concat(cars)
console.log(both)

//slice() method is used to copy & cut array 

console.log(Marvels.slice(0,2))

//splice() method is used to  replace elements in an array.

cars.splice(3, 1,"toyota")
console.log(cars)

// push add string at the end 