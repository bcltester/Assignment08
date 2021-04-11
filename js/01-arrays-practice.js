//STEP 1
// let mov = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek"];
// console.log(mov[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Wicked";
// movies[1] = "Les Miserables";
// movies[2] = "Up";
// movies[3] = "Star Wars";
// movies[4] = "Boyz in the Hood";
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = "Wicked";
// movies[1] = "Les Miserables";
// movies[2] = "Up";
// movies[3] = "Star Wars";
// movies[4] = "Boyz in the Hood";
// console.log(movies[0]);

// movies.splice(2, 0, "Dora the Explorer");
// console.log(movies.length);
// console.log(movies);

//STEP 4
// let movies = [];
// movies[0] = "Wicked";
// movies[1] = "Les Miserables";
// movies[2] = "Up";
// movies[3] = "Star Wars";
// movies[4] = "Boyz in the Hood";

// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// for (let i in movies) {
//     console.log(movies[i]);
// }

//STEP 6
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// for (let movie of movies) {
//     console.log(movie);
// }


//STEP 7
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// movies.sort();
// console.log(movies);
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 8
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// let leastFavMovies = ["G.I. Joe", "Armageddon", "Big Fish and Begonia"];
// console.log("Movies I like:\n\n");
// for (let i in movies) {
//     console.log(movies[i]);
// }
// console.log("\nMovies I regret watching:\n\n");
// for (i in leastFavMovies) {
//     console.log(leastFavMovies[i]);
// }


//STEP 9
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// let leastFavMovies = ["G.I. Joe", "Armageddon", "Big Fish and Begonia"];

// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());

//STEP 10
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// let leastFavMovies = ["G.I. Joe", "Armageddon", "Big Fish and Begonia"];

// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies.pop());


//STEP 11
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// let leastFavMovies = ["G.I. Joe", "Armageddon", "Big Fish and Begonia"];

// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies.shift());


//STEP 12
// let movies = ["The Matrix", "Leon", "Spirited Away", "Terminator 2", "Star Trek", "Wicked", "Les Miserables"];
// let leastFavMovies = ["G.I. Joe", "Armageddon", "Big Fish and Begonia"];

// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies);

// let dislike1 = movies.indexOf("G.I. Joe");
// console.log(dislike1);
// let dislike2 = movies.indexOf("Armageddon");
// console.log(dislike2);
// let dislike3 = movies.indexOf("Big Fish and Begonia");
// console.log(dislike3);

// movies[dislike1] = "Rain Man";
// movies[dislike2] = "The Empire Strikes Back";
// movies[dislike3] = "Minari";

// console.log(movies);


//STEP 13
// let movies = [["Leon", 1], ["The Matrix", 2], ["Spirited Away", 3], ["Les Miserables", 4], ["Terminator 2", 5]];
// for (let i of movies) {
//     let arr = i.filter((value) => {
//         return typeof value === "string";
//     });
//     console.log(arr.toString());
// }

//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// const showEmployee = function (arr) {
//     for (let name of arr) {
//         console.log(name);
//     }
// };

// console.log("Employees:\n\n");
// showEmployee(employees);

//STEP 15
// const filterValues = (arr) => {
//     return arr.filter((value) => {
//         return (value !== false && value !== null && value !== 0 && value !== "");
//     });
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// let randArr = [9, 0, 8, 2, 4, 7, 1, 5, 3, 6];

// const chooseRan = (arr) => {
//     let len = arr.length;
//     let index = Math.floor(Math.random() * len);
//     return arr[index];
// };

// console.log(chooseRan(randArr));

//STEP 17

const largest = (arr) => {
    arr.sort(function(a, b){return b-a}); //compare function within .sort() method that sorts in descending order
    return arr[0];
}

console.log(largest([9, 0, 8, 2, 4, 17, 1, 25, 3, 6]));