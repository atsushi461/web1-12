document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
};

var Fizz_Buzz = fonction(number)
{
  return num;
}
    
    for(var i =1; i <101; i++)
  {
    var li = document.createElement('li');
    var num = -1+i;
    li.textContent = num;
    document.getElementById('number').appendChild(li);
    
    if(num%15==0)
    {
     li.textContent = 'FizzBuzz';
     document.getElementById('number').appendChild(li);
    }
  }
