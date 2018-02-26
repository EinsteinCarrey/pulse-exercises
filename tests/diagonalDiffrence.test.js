describe("Tests cases for diagonalDifference", () => {

    const diagonalDifference = require("../src/diagonalDifference");
    const matrix = '3\r\n11 2 4\r\n4 5 6\r\n10 8 -12';
    const matrix1 = '3\r\n4 2 11\r\n6 5 4\r\n-12 8 10';
    const matrix3 = '3\r\n9 2 -1105\r\n4 5 6\r\n10 8 -12';
    const matrix4 = '2\r\n11 2 4\r\n4 5 6\r\n10 8 -12';

    test("Matrix outputs the difference between sums of primary and secondary diagonal", () => {
        expect(diagonalDifference(matrix)).toBe(15);
        expect(diagonalDifference(matrix1)).toBe(15);
    });

    test("Number in matrix are >-101 and less than 101", () => {
        expect(diagonalDifference(matrix3)).toContain("bigger than -101 and less than 101");
    });

    test("Value N is equal to number of items", () => {
        expect(diagonalDifference(matrix4)).toContain("not equal to value N");
    });

});