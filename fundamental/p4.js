//nested condn
var x=100
if(x%2)
{
        if(x>200)
        {
            console.log(`${x} is even and greater than 200`)
        }
        else if(x<200)
        {
            console.log(`${x} is even and less than 200`)

        }
        else if(x==200)
            {
                console.log(`${x} is even and eql to  200`)
    
            }
        else{
            console.log(`check your input`)
        }
}
    else{
        console.log(`${x} is even number`)
    }
