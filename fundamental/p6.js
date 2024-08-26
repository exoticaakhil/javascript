//armstrong loop
//153 = 1^3 + 5^3 + 3^3
var inp=153;
var temp=inp;
var sum=0;
while(temp>0)
{
    let rem=temp%10;
    sum=sum+(rem**3)
    temp=parseInt(temp/10)
}

    if(sum==inp)
    {
       document.write(`${sum} It is armstrong number`)
    }
    else
    {
        document.write(`${sum} It is not armstrong number`)

    }