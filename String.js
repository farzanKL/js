//String methods: allow to manipulate and work with text (strings)

let username = "KibaLabs";

console.log(username.charAt(1)); //tells about the character of the given strings as per the index

console.log(username.indexOf("a")); //tells about the index value of the given strings.
console.log(username.lastIndexOf("a"));

console.log(username.length); //tells about the length of the string.

console.log(username.trim()); //trims the space from the strings.

console.log(username.toUpperCase()); //Converts the string into capital letter.

console.log(username.toLowerCase()); //Converts the string into Small letter.

console.log(username.repeat(5)); //repeats the string.

console.log(username.startsWith(" ")); //Checks the string that any empty space is present or not and gives boolean value.

console.log(username.endsWith(" ")); //-----------------------""----------------------------

console.log(username.includes(" ")); //Checks the string that any space between the string is available or not

console.log(username.replaceAll("-", "")); //it replaces the character as per specified the user

console.log(username.padStart(10, "K")); //1st value is for specified length, how many characters the strings should be and 2nd value tells to pad the string as per the given character
console.log(username.padEnd(15, "s"));

