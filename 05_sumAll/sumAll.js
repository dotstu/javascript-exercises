const sumAll = function(firstNumber, lastNumber) {
    if(!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) return 'ERROR';
    if(firstNumber < 0 || lastNumber < 0) return 'ERROR';
    if (firstNumber > lastNumber){
        const newLastNumber = firstNumber;
        firstNumber = lastNumber;
        lastNumber = newLastNumber;
    }
    let totalSum = 0;
    for( let i = firstNumber; i < lastNumber + 1; i++){
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
