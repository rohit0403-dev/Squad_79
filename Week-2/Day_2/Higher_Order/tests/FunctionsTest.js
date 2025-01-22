describe('Using Inbuilt Higher Order Functions - ', function () {
  const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
  const myArray = [11, 34, 20, 5, 53, 16];



  it('Creating our own slice method', function () {
    let expectedResult = ['burger', 'fingerChips', 'donuts'];

    let actualResult = slice(1, 4);

    expect(actualResult).toEqual(expectedResult);
  });

 

  it('Using splice method', function () {
    let expectedResult = [
      'pizza',
      'burger',
      'noodles',
      'icecream',
      'fingerChips',
      'donuts',
      'springRoll',
    ];

    let actualResult = spliced();

    expect(actualResult).toEqual(expectedResult);
  });




  it('Using filter method checking whether a number is even or not', function () {
    let expectedResult = [12, 324, 4, 2, 4234];

    let actualResult = checkNumber(numberArray, isEven);

    expect(actualResult).toEqual(expectedResult);
  });

  it('Using filter method checking whether a number is prime or not', function () {
    let expectedResult = [2, 3];

    let actualResult = checkNumber(numberArray, isPrime);

    expect(actualResult).toEqual(expectedResult);
  });




  it('Return an array of non prime numbers using reject method', function () {
    let expectedResult = [12, 324, 213, 4, 45, 4234];

    let actualResult = nonPrime(numberArray);

    expect(actualResult).toEqual(expectedResult);
  });

 

  it('Using lambda function to check whether a number is even or not', function () {
    let expectedResult = [12, 324, 4, 2, 4234];

    let actualResult = checkNumber(numberArray, isEvenUsingLambda);

    expect(actualResult).toEqual(expectedResult);
  });


  it('Return an array of squre of each number using map method', function () {
    let expectedResult = [121, 1156, 400, 25, 2809, 256];

    let actualResult = findSquareOfNumbers(myArray);

    expect(actualResult).toEqual(expectedResult);
  });


  it('Return the multiplication of the numbers in myArray using reduce method', function () {
    let expectedResult = 31715200;

    let actualResult = multiply(myArray);

    expect(actualResult).toEqual(expectedResult);
  });

  it('Defines sumOfSquares', function () {
    expect(typeof sumOfSquares).toBe('function');
  });

  it('Return the sum of squares of the numbers in myArray using map and reduce method', function () {
    let expectedResult = 4767;

    let actualResult = sumOfSquares(myArray);

    expect(actualResult).toEqual(expectedResult);
  });
});
