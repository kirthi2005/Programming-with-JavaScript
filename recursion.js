//recursion
//example function calls itself until counter become 0
let counter = 3;
function example()
{
    console.log(counter);
    counter = counter - 1;
    if(counter == 0)
     return;
    example();
}