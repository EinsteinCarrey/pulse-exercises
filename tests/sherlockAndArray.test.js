describe("Tests cases for diagonalDifference", () => {

    const sherlockAndArray = require("../src/sherlockAndArray");
    const input1 = '11\r\n3\r\n1 2 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3' +
        '\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3\r\n4\r\n1 2 3 3';
    const input2 = `2\r\n3\r\n1 2 3\r\n${10e6}\r\n${Array(10e6)}`;
    const input3 = '2\r\n3\r\n1 2 3\r\n4\r\n1 2 3 3';

    test("There are are at-least 1 and less than 10 test cases ", () => {
        expect(sherlockAndArray(input1)).toContain("at-least 1 and must not exceed 10");
    });

    test("Length of array must not exceed 10e5", () => {
        expect(sherlockAndArray(input2)).toBe("Length of array must not exceed 10e5");
    });

    test("Length of array must not exceed 10e5", () => {
        expect(sherlockAndArray(input3)).toBe("NO\r\nYES\r\n");
    });

});