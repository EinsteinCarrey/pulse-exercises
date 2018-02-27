describe("Tests cases for superReducedString", () => {

    const reduceString = require("../src/superReducedString");
    const string1 = "";
    const string2 = "abc";
    const string3 = "aabcc";
    const string4 = "aaabccddd";
    const string5 = "aaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccddde" +
        "aaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccddde"; // 120 characters
    const string6 = "bcabac";

    test("Returns Empty String", () => {
        expect(reduceString(string1)).toBe("Empty String");
    });

    test("returns reduced string", () => {
        expect(reduceString(string2)).toBe("abc");
    });

    test("Removes duplicate characters", () => {
        expect(reduceString(string3)).toBe("b");
    });

    test("Removes only duplicate characters that appear in multiple of 2", () => {
        expect(reduceString(string4)).toBe("abd");
    });

    test("Reject strings that are more than 100 characters", () => {
        expect(reduceString(string5)).toContain("not be longer than 100 characters");
    });

    test("Removes all duplicates recursively", () => {
        expect(reduceString(string6)).toBe("Empty String");
    });

});