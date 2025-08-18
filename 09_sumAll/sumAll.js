const sumAll = function(initialValue,finalValue) {

    if (initialValue < 0 || finalValue < 0 || 
        !Number.isInteger(initialValue) || 
        !Number.isInteger(finalValue)) {
        return "ERROR"
    }

    let sum = 0;
    let smallerValue = initialValue;
    let largerValue = finalValue;
    if (initialValue > finalValue) {
        smallerValue = finalValue
        largerValue = initialValue
    }
    for (i = smallerValue; i <= largerValue; i++)
        sum += i
        return sum
    }

// Do not edit below this line
module.exports = sumAll;
