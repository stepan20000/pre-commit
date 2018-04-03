const fs = require('fs');

const newLineSymbol = process.platform == 'win32' ? '\r' : '\n';
const removeComments = (str) => str.split(/\r?\n/).filter((line) => line[0] != '#').join(newLineSymbol);
let regExp = /(feat|fix|style|refactor|chore)\(MOB-\d{3,4}\): .{10,1000}/gi;

console.log(' ***   Pre Commit Hook   *** ');

try {
    let commitMessage = fs.readFileSync(process.argv[2], 'utf8');
    console.log('Commit message');
    console.log(commitMessage);
    console.log('Without comments');
    console.log(removeComments(commitMessage));

    if (!removeComments(commitMessage).match(regExp)) {
        throw new Error('Your commit message does not match to the pattern. \n' +
            'Please read https://github.com/Debtdomain/PCS-Boardportal/wiki/Working-with-git \n' +
            'and try again');
    }
} catch(e) {
    console.log(e.stack);
    process.exit(1);
}
