   
    for(var i =1; i <102; i++)
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
     if(num%3==0)
    {
     li.textContent = 'Fizz';
     document.getElementById('number').appendChild(li);
    }
     if(num%5==0)
    {
     li.textContent = 'Buzz';
     document.getElementById('number').appendChild(li);
    }
  }
