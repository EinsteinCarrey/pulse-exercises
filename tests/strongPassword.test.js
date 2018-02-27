describe("Tests cases for strongPassword", () => {

    const countRemainingChars = require("../src/strongPassword");
    const string1 = "3\r\n";
    const string2 = "5\r\nabc$!";
    const string3 = "5\r\nAbc$B";
    const string4 = "6\r\nAbc$!1";
    const string5 = "6\r\nAAA$!1";
    const string6 = "4\r\nAa1!";
    const string7 = "120\r\naaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccddde" +
        "aaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccdddeaaabccddde"; // 120 characters

    test("Checks password lenth is equal to number provided", () => {
        expect(countRemainingChars(string1)).toContain("length is not equal to number provided");
    });

    test("Check password is not longer than 100 characters", () => {
        expect(countRemainingChars(string7)).toContain("not longer than 100 characters");
    });

    test("Check password contains capital letter", () => {
        // expect(countRemainingChars(string2)).toBe(2);
        expect(countRemainingChars(string3)).toBe(1);
    });

    test("Check password contains small letter", () => {
        expect(countRemainingChars(string5)).toBe(1);
    });

    test("Check password is at-least 6 characters", () => {
        expect(countRemainingChars(string6)).toBe(2);
    });

    test("Return 0 if password is strong", () => {
        expect(countRemainingChars(string4)).toBe(0);
    });

});