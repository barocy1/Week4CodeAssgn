//1.
//Create an array called ages
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Subtract the last element to to the 1st element programmatically.
console.log(ages[ages.length - 1] - ages[0]);
//Add a new age to the array & subratact last element to 1st element
ages.push(47);
console.log(ages[ages.length - 1] - ages[0]);
//Use loop to Iterate through the array and calculate the average age.
var i; sum = 0;
for (i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}
console.log(sum / ages.length);

//2. Create an array
var arrayNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Use loop to Iterate the average number of letters per name in the array.
sum = 0;
for (i = 0; i < arrayNames.length; i++) {
    sum = sum + arrayNames[i].length;

}
console.log(sum / arrayNames.length);
//Use loop to iterate the array and concatenate all names together.
var con = arrayNames[0];
for (i = 1; i < arrayNames.length; i++) {
    con = con.concat(' ', arrayNames[i]);
}
console.log(con);

//3. Get the last element of the array.
console.log(arrayNames[arrayNames.length - 1]);

//4. Get the 1st element of the array.
console.log(arrayNames[0]);

//5. Create new array called nameLengths
var nameLengths = [];
for (i = 0; i < arrayNames.length; i++) {
    nameLengths.push(arrayNames[i].length);
}
console.log(nameLengths);
//6. A loop that interates over nameLengths and calculate the sum of all elements in array.
sum = 0;
for (i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);
//7. Write a function with 2 parameters
function repeat(word, n) {
    var repeatedWord = "";
    for (i = 0; i < n; i++) {
        repeatedWord = repeatedWord + word;
    }
    return (repeatedWord);
}
console.log(repeat('Hello ', 3));

//8. function with 2 parameters (full Name)
function fullName(firstName, lastName) {
    return(firstName + ' ' + lastName);
}
console.log(fullName("Yolanda", "Barocio"));

//9. function that takes an array of numbers and returns true.
function hundred (array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(hundred(ages));
//10. function that takes an array of numbers & returns the average of elements
function average(array) {
    sum = 0;
    for (i = 0; i < array.length;i++) {
        sum = sum + array[i];
    }
    return(sum / array.length);
}
console.log(average(ages));
//11. function with 2 arrays of numbers and returns true
function compareAvgs(array1, array2) {
    sum = 0;
    for (i = 0; i < array1.length; i++) {
        sum = sum + array1[i];
    }
    var avg1 = (sum / array1.length);
    sum = 0;
    for (i = 0; i < array2.length; i++) {
        sum = sum + array2[i];
    }
    var avg2 = (sum / array2.length);
    if (avg1 > avg2) {
        return true;
    } else {
        return false;
    }
}
console.log(compareAvgs(nameLengths, ages));
//12. Function called willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket){
if ((isHotOutside) && (moneyInPocket > 10.50)) {
    return true;
} else {
    return false;
}
} 
console.log(willBuyDrink(true, 20));

//13. Create a function of your own that solves a problem 
function steakHouse (juicySteak, distance) {
    if ((juicySteak = "NYSteak" || "Ribeye" || "Flo's Filet") && distance < 10) {
        return "LongHorn it is!";
    } else {
        return "Too far, Stay Home!";
    }
}
console.log(steakHouse("NYSteak", 6));