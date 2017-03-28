function createPhoneNumber(a) {
  var number = "(";
  for(var i=0;i<a.length;i++){
    number+=a[i];
    if(a[i]==3) number+=")";
    else if(a[i]==6) number+="-";
  }
  return number;
}
console.log(createPhoneNumber([1,2, 3, 4, 5, 6, 7, 8, 9, 0]));