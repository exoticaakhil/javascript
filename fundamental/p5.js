//nested loops
//pattern 
/*
1
1   2
1   2   3
1   2   3   4
1   2   3   4   5
*/
for(var i=1;i<=5;i++)
{
    for(var j=1;j<=i;j++)
    {
        console.log(`${i} ${j}`)
        document.write(`&nbsp;${j}&nbsp;`)
    }
    document.write(`<br>`)
}

document.write(`<br>`)

for(var i=1;i<=5;i++)
    {
        for(var j=1;j<=i;j++)
        {
            console.log(`${i} ${j}`)
            document.write(`&nbsp;${i}&nbsp;`)
        }
        document.write(`<br>`)
    }

/**
 12345
 1234
 123
 12
 1
 */

document.write(`<br>`)
 for(var i=5;i>=1;i--)
    {
        for(var j=1;j<=i;j++)
        {
            console.log(`${i} ${j}`)
            document.write(`&nbsp;${j}&nbsp;`)
        }
        document.write(`<br>`)
    }

/*
      *
    *   *
   *  *  *
  *  *  *  *
*  *  *  *  *  
 */
for(var i=1;i<=5;i++)
{
    for(var k=1;k<=(5-i);k++)
    {
        document.write(`&nbsp;&nbsp;`)  
    }
    for(var j=1; j<=i; j++)
    document.write(` * &nbsp;`)
    document.write(`<br>`)
}