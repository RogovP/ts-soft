function validatePIN(PIN) {
  var testPass = /^(\d{4}|\d{6})$/;
  
  return testPass.test(PIN);
}

console.log( validatePIN("1234") );
console.log( validatePIN("12345") );
console.log( validatePIN("a234") );
