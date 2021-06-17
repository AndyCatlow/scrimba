function caseInsensitivePalindrome(str) {
  //  str to lowercase
  str = str.toLowerCase();
  console.log(str);
  // check first letter = last letter
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * Test Suite
 */
describe("caseInsensitivePalindrome()", () => {
  it("returns true for a case insensitive palindrome", () => {
    // arrange
    const str = "AaBaa";

    // act
    const result = caseInsensitivePalindrome(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns false when not a case insensitive palindrome", () => {
    // arrange
    const str = "abac";

    // act
    const result = caseInsensitivePalindrome(str);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(false);
  });
});
