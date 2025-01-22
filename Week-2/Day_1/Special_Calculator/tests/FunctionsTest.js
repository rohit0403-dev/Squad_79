describe('Create an addition operation for the special calculator - ', function () {
 
  it('Adding two numbers using special addition function', function () {
    let expectedResult = 5;

    let actualResult = specialAddition(10, 5);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed here' ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialAddition(-1, 2);

    expect(actualResult).toEqual(expectedResult);
  });



});

describe('Create a division operation for the special calculator - ', function () {
 
  it('Dividing two numbers for the special calculator', function () {
    let expectedResult = 2;

    let actualResult = simpleDivision(10, 5);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Cannot divide a smaller number by a larger number ' when numberTwo>numberOne as result", function () {
    let expectedResult = 'Cannot divide a smaller number by a larger number';

    let actualResult = simpleDivision(5, 10);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as second argument as result", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = simpleDivision(10, -5);

    expect(actualResult).toEqual(expectedResult);
  });



});

describe('Create a division operation for the special calculator - ', function () {
  

  it('Adding two valid numbers using special calculator', function () {
    let expectedResult = 5;

    let actualResult = specialCalculator(10, 5, specialAddition);

    expect(actualResult).toEqual(expectedResult);
  });

  it('Dividing two valid numbers using special calculator', function () {
    let expectedResult = 2;

    let actualResult = specialCalculator(10, 5, simpleDivision);

    expect(actualResult).toEqual(expectedResult);
  });

  
  it("Return 'Negative numbers not allowed' when a negative number is passed as second argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialCalculator(1, -2, specialAddition);

    expect(actualResult).toEqual(expectedResult);
  });

});
