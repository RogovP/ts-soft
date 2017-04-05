function createPhoneNumber(masNum) {
  var str = masNum.join("");
  
  return str.replace( /([\d]{3})([\d]{3})([\d]{4})/,//делим строку на нужные "элементы",чтобы использовать в дальнейшем
                      "($1)$2-$3" );
}
console.log( createPhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ) );