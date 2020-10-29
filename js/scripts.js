$(document).ready(function() {
  $("form#romanNumeral").submit(function(event){
    event.preventDefault();
    let romanNumeralInput = parseInt($("#romanNumeralInput").val());
    let romanNumeralOutput = [];

    if (romanNumeralInput.toString().length === 1) {
      console.log("The roman numeral is I");
      return romanNumeralOutput;
    } else {
      console.log("We didn't find anything");
    }

  });
}); 