"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result = ["",""];
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:\s*e\s?[-+]?\d+)?)\s?º?([fFcCkK])\s*$/;
  
  var m = temp.match(regexp);

  
  if (m) {
    var regexp2 = /^([-+]?\d+(?:\.\d+)?)(?:\s*e\s?)?([-+]?\d+)?$/
    var numtemp = m[1].match(regexp2);
    var num = parseFloat(numtemp[1]*10^numtemp[2]);
//    var num = m[1];
    var type = m[2];
//    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result[0] = (num * 9/5)+32;
      result[0] = result[0].toFixed(1)+" Farenheit"
      result[1] = (num + 273.15) ;
      result[1] = result[1].toFixed(1)+" Kelvin"
    }
    else {
      if (type == 'f' || type == 'F') {
        result[0] = (num - 32)*5/9;
        result[0]= result[0].toFixed(1)+" Celsius"
        result[1] = ((num - 32)*5/9)+273.15;
        result[1] = result[1].toFixed(1)+" Kelvin"
      }
      else{
        result[0] = (num - 273.15);
        result[0]= result[0].toFixed(1)+" Celsius"
        result[1] = ((num - 273.15)/(5/9))+32;
        result[1] = result[1].toFixed(1)+" Farenheit"
      }
    }

    converted.innerHTML = result[0] +"\n"+ result[1];
  }
else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
