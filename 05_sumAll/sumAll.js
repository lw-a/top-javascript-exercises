const sumAll = function(x, y) {

    let result = 0;

    if (x < 0 || y < 0 || (typeof(x) != "number") ||(typeof(y) != "number") ) {
        return 'ERROR';
    }

    if (x < y) {
        for (; x <= y; x++) {
            result += x;
        }
    } else { 
        for (; y <= x; y++) {
            result += y;
        }
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
