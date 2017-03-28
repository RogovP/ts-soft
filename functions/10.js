function consecutive(mas) {
  var num=[];
    var maxNum = 1;
    var minNum = mas[0];
   for (var i =0;i<mas.length;i++){
    if(maxNum<mas[i]) {maxNum = mas[i];}
    if(minNum>mas[i]) {minNum = mas[i];}
  }
  for(minNum;minNum<maxNum+1;minNum++){
     num.push(minNum);
  }
  return num.length - mas.length;
}


console.log(consecutive([4,8,6]));