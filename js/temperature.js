"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate(original) {
  var result = ["","",""];
  var temp = original.value;
  // var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)\s*([cCfFkK])\s*/
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:\s*e\s?[-+]?\d+)?)\s?º?((?:([Cc])(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?)|(?:([Ff])(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)?)|(?:([Kk])(?:e(?:l(?:v(?:i(?:n)?)?)?)?)?))\s*$/;
  var m = temp.match(regexp);

  if (m) {
    var regexp2 = /^([-+]?\d+(?:\.\d+)?)(?:\s*e\s?)?([-+]?\d+)?$/
    var numtemp = m[1].match(regexp2);
    numtemp[1] = parseFloat(numtemp[1]);

    if (undefined != numtemp[2]){
      numtemp[2] = parseFloat(numtemp[2]);
      var num = numtemp[1]*Math.pow(10, numtemp[2]);
    }
    else{
      var num = parseFloat(numtemp[1]);
    }
    var type = m[2];
    if (m[2] == 'c' || m[2] == 'C') {
      result[0] = num ;
      result[0] = result[0].toFixed(2)+" C";
      result[1] = (num * 9/5)+32;
      result[1] = result[1].toFixed(2)+" F";
      result[2] = (num + 273.15) ;
      result[2] = result[2].toFixed(2)+" K";
 
    }
    else {
      if (m[3] == 'f' || m[3] == 'F') {
        result[0] = (num - 32)*5/9;
        result[0]= result[0].toFixed(2)+" C";
        
        result[1] = num;
        result[1] = result[1].toFixed(2)+" F";
        
        result[2] = ((num - 32)*5/9)+273.15;
        result[2] = result[2].toFixed(2)+" K";
      }
      else {
        result[0] = (num - 273.15);
        result[0]= result[0].toFixed(2)+" C";
        result[1] = ((num - 273.15)/(5/9))+32;
        result[1] = result[1].toFixed(2)+" F";
        result[2] = num ;
        result[2] = result[2].toFixed(2)+" K";
      }
    }
    return result;
  }
}
