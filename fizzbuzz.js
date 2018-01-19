for (var x=1; x <= 100; x++)

{
//to find the least common multiple of 3 and 15
    if (x % 15 == 0)

        console.log("FizzBuzz");
//to find the numbers that are multiples of 3 only
    else if (x % 3 == 0)

        console.log('Fizz');
//to find the numbers that are multiples of 5 only
    else if (x % 5 == 0)

        console.log('Buzz');

    else
//if none of the conditions are satisfied, then just print number
        console.log(x);

}