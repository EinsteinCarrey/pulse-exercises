describe("Tests cases for compareTheTriplets", () => {

    const compareTheTriplets = require("../src/compareTheTriplets");
    const anne = "5 6 7";
    const bob = "3 6 10";
    const anne2 = "3 6 10";
    const bob2 = "6 10 14";
    const anne3 = "2000 6 10";
    const bob3 = "1000 10 14";
    const anne4 = "-1 6 10";
    const bob4 = "5 10 14";

    test("Both Anne and Bob earn 1 point each", () => {
        expect(compareTheTriplets(anne, bob)).toBe("1 1");
    });

    test("Both Anne and Bob earn 1 point each", () => {
        expect(compareTheTriplets(bob, anne)).toBe("1 1");
    });

    test("Both Anne and Bob don not earn any points", () => {
        expect(compareTheTriplets(anne2, bob)).toBe("0 0");
    });

    test("Bob2 earn more points than Anne2", () => {
        expect(compareTheTriplets(anne2, bob2)).toBe("0 3");
    });

    test("Parameters provided are less than 100", () => {
        expect(compareTheTriplets(anne3, bob3)).toContain("less than or equal to 100");
    });

    test("Parameters provided are positive integers", () => {
        expect(compareTheTriplets(anne4, bob4)).toContain("must be positive");
    });

});