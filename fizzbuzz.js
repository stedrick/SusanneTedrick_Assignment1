
//for loop to constrain numbers from 1 - 100
for (var x=1; x <= 100; x++)

{
//to test the number as a least common multiple of both 3 and 5 (15)
    if (x % 15 == 0)
        console.log("FizzBuzz");
    
//to test the number as a multiple of 3 only
    else if (x % 3 == 0)

        console.log('Fizz');
//to test a number as a multiple of 5 only
    else if (x % 5 == 0)
        console.log('Buzz');

    else
//if the number does not meet previous conditions, then just print number
        console.log(x);
}
