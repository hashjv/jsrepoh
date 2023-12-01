const readlineSync = require('readline-sync');

var count = 0;
var userAge = readlineSync.question('How old are you? ');

if (userAge >= 25) {
    console.log('Man is old enough');
    count = count + 1;
} else {
    console.log('Grow a little more, son');
    count = count - 1;
}
console.log(count);