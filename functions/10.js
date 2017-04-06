function consecutive(mas) {
  var num=[];
  
  var minNum = Math.min.apply(null, mas);// использую apply, т.к. он принимает массив, в отличии от call, который принимает список аргументов
  var maxNum = Math.max.apply(null, mas);
  
  for (minNum; minNum < maxNum + 1; minNum++) {
     num.push(minNum);
  }
  
  return num.length - mas.length;
}

console.log( consecutive([4, 8, 6]) );
