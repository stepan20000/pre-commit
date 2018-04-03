console.log('pre-commit-script.js');
const fs = require('fs');
let commitMessage;

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


try {
    commitMessage = fs.readFileSync(process.argv[2], 'utf8');
    console.log(commitMessage);
    if (commitMessage.length > 10) {
        throw new Error('Very long message. Sorry.')
    }
} catch(e) {
    console.log('Error:', e.stack);
    process.exit(1);
}

console.log('Commit message is:');
console.log(commitMessage);
