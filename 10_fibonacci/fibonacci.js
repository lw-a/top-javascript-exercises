const fibonacci = function(x) {

if (x < 0) {
    return "OOPS";
}

let total = 1;
let current = 1;
let previous = 0;

for (i = 1; i < x; i++) {

total = previous + current;
previous = current;
current = total;

}

return total;
};

// Do not edit below this line
module.exports = fibonacci;
