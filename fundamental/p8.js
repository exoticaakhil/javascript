for(let i=0;i<10;i++)
    {
        for(let j=0;j<10;j++)
        {
            for(let k=0;k<10;k++)
            {
                for(let n=0; n<10;n++)
                {
                var pow=(i ** 3) + (j ** 3) + (k ** 3) + (n **3 )
                var p=(i * 1000 + j * 100 + k *10)
                if(pow==p)
                    document.write(`<br>${p} is an armstrong number`)
            }
            }
        }
    }