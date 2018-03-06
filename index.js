
function sumStrings(a, b){
  if(a == 0)
    return b;
  if(b == 0)
    return a;
  
  if(parseInt(a).toString().charAt(1) == '.' || parseInt(b).toString().charAt(1) == '.'){
    var x = a.split('').reverse();
    var y = b.split('').reverse();
    var result = [];
    for(var i=0; x[i]>=0 || y[i]>=0; i++){
      var sum = parseInt(x[i]) + parseInt(y[i]);
      if(!isNaN(sum)){
        if(!result[i])
          result[i] = 0;
      }
      var next = (result[i] + sum) / 10 | 0;
      result[i] = (result[i] + sum) % 10;
      if(next)
        result[i+1] = next;
    }
    return result.reverse().join('');
  }else {
    return parseInt(a) + parseInt(b)
  }
}
