const palindromes = function (str) {

    let cleanString = str.toLowerCase();
    cleanString = cleanString.replace(/[., /#!$%^&*;:{}=-_`~()]/g, "");
    let newString = "";

    for (let i = cleanString.length - 1; i >= 0; i--) {
        newString += cleanString[i]
    }
    
    if (cleanString === newString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
