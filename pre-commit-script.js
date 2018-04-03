console.log('pre-commit-script.js');

// print process.argv
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});