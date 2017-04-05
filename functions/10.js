function consecutive(mas) {
  var num=[];
  var maxNum = 1;
  var minNum = mas[0];
  
  minNum = Math.min.apply(null, mas);
  maxNum = Math.max.apply(null, mas);
  
  for (minNum; minNum < maxNum + 1; minNum++) {
     num.push(minNum);
  }
  
  return num.length - mas.length;
}

console.log( consecutive([4, 8, 6]) );