const repeatString = function(str, num) {
    let reply = ''
    if (num < 0){
        reply = 'ERROR';
    } else {
        reply = str.repeat(num);
    }
    return reply

};

// Do not edit below this line
module.exports = repeatString;
