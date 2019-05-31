// 2. Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle"); // Add a Element to end of the Array

console.log(favoriteAnimals);

favoriteAnimals.splice(1,0,"meerkat"); // Add a Element in position no: 1

console.log(favoriteAnimals);

console.log("The array has a length of:"  + favoriteAnimals.length)

favoriteAnimals.splice(3,1) // Remove 'giraffe' from arrayelemnt.

console.log(favoriteAnimals);

for(let i=0;i<favoriteAnimals.length;i++)
{
    if (favoriteAnimals[i] === 'meerkat')
    {
        console.log(`The giraffe you are looking for is at index  ` + i)
    }
}
