import {describe, it, expect}  from "vitest"
import {sumAndPlusTen} from "./basic"

describe ( "sumAndPlusTen", () => {
    it ( "should return the sum of a + b + 10 when a, b is integer",() => {
        const a = 5;
        const b = 10;
        // executetable
        const result  = sumAndPlusTen(a, b);

    });
    
    it ( "should return Nan if none of the parameters are provided", () => {
        const a = 5;
        const b = 10;
    
        const result = sumAndPlusTen(a, b );
        
    expect (result).toBe(NaN);
    });
});
describe("maxNum", () => {
  it("should return the second argument when it is greater", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  it("should return the first argument when it is greater", () => {
    expect(maxNum(50, 1)).toBe(50);
  });

  it("should return the first argument when both arguments are equal", () => {
    expect(maxNum(5, 5)).toBe(5);
  });

  it("should throw an error if one of the arguments is not a number", () => {
    expect(maxNum(5, "10")).toThrow("All of the arguments must be a number!");
  });
});

describe ("maxNum", () => {
    it ("should throw an error if one of the arguments is nor a"

    );
})

describe("factorial", () => {
  it("should return 1 when the input is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 when the input is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 3628800 when the input is 10", () => {
    expect(factorial(10)).toBe(3_628_800);
  });

  it("shoould throw error if the input is negative number", () => {
    expect(factorial(-10)).toThrowError("Number must be a positive integer!");
  });
});
