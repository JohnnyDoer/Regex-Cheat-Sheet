let myString, myRegex, result;


// Basic search in a string.
myString = "Hello, World!"
myRegex = /Hello/
result = myRegex.test(myString)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Basic search in a string 2.
myString = "Somewhere Waldo is hiding in the text!"
myRegex = /Waldo/
result = myRegex.test(myString)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Searching for either of multiple patterns.
myString = "James has a pet cat."
myRegex = /dog|cat|fish|bird/       // Either dog or cat or fish or bird.
result = myRegex.test(myString)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')



// Case insensitive match.
myString = "freeCodeCamp"
myRegex = /freecodecamp/i
result = myRegex.test(myString)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')



// Extract the regex pattern. (Gives only first match)
myString = "Extract the word 'CODING' from this string."
myRegex = /coding/i
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Extract all the patterns.
myString = "Repeat, repeat, repeat."
myRegex = /repeat/ig
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Wildcard ' . ', substitute for any 1 character.
myString = "I will hum a song about hugging and then hug you."
myRegex = /hu./g
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Match predifined list of characters.
myString = "Beware of bugs in your bags."
myRegex = /b[aeiou]gs/g     // Equivalent to /bags|begs|bigs|bogs|bugs/g
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Range of letters
myString = "I am a programmer boy."
myRegex = /[a-z]/ig     // Equivalent to /[a-z][A-Z]/g
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Range of numbers & characters.
myString = "3.1415 is approx PI."
myRegex = /[2-4a-p]/ig
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Do not match.
myString = "3 blind mice."
myRegex = /[^0-9aeiuo]/ig       // Even spaces will be matched in this case.
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Match character that occurs 1 or more times.
myString = "The Mississippi river banks+."
myRegex = /s+/ig
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Match charater 0 or more times.
myString = "Golang is made by Google for programmers,"
myRegex = /Go*/ig
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Greedy match: finds longest match. (default)
myString = "<h1>Winter is coming.</h1>"
myRegex = /<.*>/
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')


// Lazy match: finds shortest match.
myString = "<h1>Winter is coming.</h1>"
myRegex = /<.*?>/
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')



/*

//
myString = ""
myRegex = //
result = myString.match(myRegex)

console.log(myString + '\n' + myRegex + '\n' + result + '\n')

*/
