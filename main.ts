/*
Q29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

* Make a array of your three favorite fruits and call it favorite_fruits.

* Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/

let favorite_fruits: string [] = ["Banana","Mango","Melon","Apple","Grapes"];
if (favorite_fruits.includes("Banana")) {
    console.log("Your reaily like bananas!")
}
if (favorite_fruits.includes("Mango")) {
    console.log("Your reaily like Mango!")
}

if (favorite_fruits.includes("Melon")) {
    console.log("Your reaily like Melon!")
}

if (favorite_fruits.includes("Apple")) {
    console.log("Your reaily like Apple!")
}

if (favorite_fruits.includes("Grapes")) {
    console.log("Your reaily like Grapes.")
}
if (favorite_fruits.includes("Guava")) {
    console.log("Your reaily like Guava!")
}else {
    console.log("Fruit is not available.")
}