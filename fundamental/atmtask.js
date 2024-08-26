var avlbal=1000
var x=prompt("Enter the option to be performed \n1.Check Balance\n2.Deposite\n3.Withdraw")
var choice=Number(x);
switch(choice)
{
    case 1: console.log("Checking Account balance");
            console.log(`Your cuurent balance is`,avlbal);
            break;
    case 2: var addbal=Number(prompt("Enter the amount to deposit"))
            var avlbal= + avlbal + addbal;
            console.log(`Your cuurent balance is`,avlbal);
          break;
    case 3: var withbal=Number(prompt("Enter the amount to withdraw"))
          var avlbal=Number(avlbal - withbal);
          console.log(`Your cuurent balance is`,avlbal);
            break;
}