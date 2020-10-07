var numbers=[-30, 14, 66, 21, 72, -4]

var numberEle = [];

function clickSlick(curNum, iteration){
  
  let that = this;
  this.number = curNum;
  this.iteration = iteration;
  
  this.ele = document.createElement('div');
  
  this.ele.className = ('divvy' + this.iteration);
  
  this.textEle = document.createElement('p');
  
 
  
  function setP(curNum){
  if (curNum < 0){
    var rtrnr = 'The number is ' + curNum + ' and the number is below 0';

  }
  else if (curNum > 50){
    var rtrnr = 'The number is ' + curNum + ' and the number is greater than 50';

  }
  else if (curNum == 14){
    var rtrnr = 'The number is ' + curNum + ' and the number equals 14';

  }
  else {
    var rtrnr = 'The number is ' + curNum;

  }
    
    return rtrnr
  }
  
  
  var rtrnd = setP(this.number);
  
  this.textEle.innerHTML = rtrnd;
 
  this.textEle.addEventListener("click", function(){
    that.number = that.number + 1;
    var changeUp = setP(that.number)
    that.textEle.innerHTML = changeUp
  })
  
  
  this.ele.appendChild(this.textEle);
  
  document.body.appendChild(this.ele);
  
}



for ( var i  = 0; i < numbers.length; i++){
  numberEle.push(new clickSlick(numbers[i], i))
}