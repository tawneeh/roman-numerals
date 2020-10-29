$(document).ready(function() {
  $("form#romanNumeral").submit(function(event){
    event.preventDefault();
    let romanNumeralInput = parseInt($("#romanNumeralInput").val());
    let romanNumeralOutput = [];
    let englishToNumerals = [1, "I", 5, "V", 10, "X", 50, "L", 100, "C", 500, "D", 1000, "M" ]

    if (romanNumeralInput.toString().length === 1) {
      if (romanNumeralInput === 1) {
        // if the value is 1, and the length is 1 then the output is englishToNumerals[1]
        console.log("The roman numeral is I");
      } else if (romanNumeralInput === 5) {
        // if the value is 5, and the length is 1 then the output is englishToNumerals[3]
        console.log("The roman numeral is V");
      }
      return romanNumeralOutput;
    } else if (romanNumeralInput.toString().length === 2) {
      if (romanNumeralInput === 10) {
        // if the value is 10, and the length is 2 then the output is englishToNumberals[5]
        console.log("The roman numeral is X");
      } else if (romanNumeralInput === 50) {
        console.log("The roman numeral is L");
        // if the value is 50, and the length is 2 then the output is englishToNumerals[7]
      } 
    }
    // else if (romanNumeralInput.toString().length === 3) {
    //   // if the value is 100 and the length is 3 then the outut is englishToNumerals[9]
    //   // if the value is 500, and the length is 3 then the output is englishToNumerals[11]
    
    // } 
    // else if (romanNumeralInput.toString().length === 4) {
    //   console.log("This is a four digit roman numeral");
    //   // if the value is 1000 and the length is 4 then the outut is englishToNumerals[13]
    // }

  });
}); 