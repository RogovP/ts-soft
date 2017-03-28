function validatePIN(PIN) {
    if (PIN.length === 4 || PIN.length === 6 && /\D/.test(PIN) === true) {
        if (/\D/.test(PIN) === true) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
console.log(validatePIN("1234"));//true
console.log(validatePIN("12345")); //false
console.log(validatePIN("a234")); //false