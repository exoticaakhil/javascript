for(let i=0;i<10;i++)
{
    for(let j=0;j<10;j++)
    {
        for(let k=0;k<10;k++)
        {
            var pow=(i ** 3) + (j ** 3) + (k ** 3)
            var p=(i * 100 + j * 10 + k)
            if(pow==p)
                document.write(`<br>${p} is an armstrong number`)
        }
    }
}