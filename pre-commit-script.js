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
    var data = fs.readFileSync(process.argv[2], 'utf8');
    commitMessage = data;
    //console.log(data);
} catch(e) {
    console.log('Error:', e.stack);
}

console.log('Commit message is:');
console.log(commitMessage);
