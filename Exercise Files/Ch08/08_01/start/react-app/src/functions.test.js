import { timesTwo } from "./functions"

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8)
    /* 
    Expect is basically the testing; if it passes or fails
    Then the function, followed by the input if needed
    toBe (Matchers function), is what the expected output of the function should be
    The result is then matched if it is True or False/Pass or Fail
    */
})