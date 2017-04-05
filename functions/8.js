function validatePIN(PIN) {
  
  var testPass = /^(\d{4}|\d{6})$/;
  return testPass.test(PIN);
  
}

console.log( validatePIN("1234") );//true
console.log( validatePIN("12345") ); //false
console.log( validatePIN("a234") ); //false