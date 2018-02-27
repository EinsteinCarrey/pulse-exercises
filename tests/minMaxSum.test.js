describe("Tests cases for minMaxSum", () => {

    const minMaxSum = require("../src/minMaxSum");
    const values1 = "5 6 7 20 40 10 3 4";
    const values2 = "-5 6 7 20 40";
    const values3 = "5 6 7 20 40";

    test("Checks input has five items", () => {
        expect(minMaxSum(values1)).toContain("more than five values");
    });

    test("Check inputs are less than 10e9 and more than 0", () => {
        expect(minMaxSum(values2)).toContain("less than 10e9 and more than 0");
    });

    test("Calculates min and max sum", () => {
        expect(minMaxSum(values3)).toBe("38 73");
    });

});