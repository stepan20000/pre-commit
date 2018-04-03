console.log('pre-commit-script.js');
const fs = require('fs');
let commitMessage;
let regExp = /(feat|fix|style|refactor|chore)\(MOB-\d{3,4}\): .{10,1000}/gi;

// print process.argv
// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
// });

// fs.readFile(process.argv[2], 'utf8', function (err,data) {
//     if (err) {
//         return console.log('Error in pre-commit-script.js');
//     } else {
//         commitMessage = data;
//         console.log(data);
//     }
// });

const removeComments = (str) => str.split(/\r?\n/).filter((line) => line[0] == '#').join(' ');

try {
    commitMessage = fs.readFileSync(process.argv[2], 'utf8');
    console.log('Commit message is:');
    console.log(commitMessage);
    console.log('Commit message without comments: ')
    console.log(removeComments(commitMessage));
    if (!removeComments(commitMessage).match(re)) {
        throw new Error('Your commit message does not match to the pattern. \n' +
            'Please read https://github.com/Debtdomain/PCS-Boardportal/wiki/Working-with-git \n' +
            'and try again');
    }
} catch(e) {
    console.log(e.stack);
    process.exit(1);
}
