const ftoc = function(x) {
  x = (x-32)*0.5556;
  return parseFloat(x.toFixed(1));
};

const ctof = function(x) {
x = (x*1.8)+32;
return parseFloat(x.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
