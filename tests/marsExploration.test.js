describe("Tests cases for marsExploration", () => {

    const countAlteredCharacters = require("../src/marsExploration");
    const string1 = "SOS";
    const string2 = "SOSSOS";
    const string3 = "SOSSOT";
    const string4 = "SOSSPSSQSSOR";
    const string5 = "SO";
    const string6 = "sos";
    const string7 = "SOSSPSSQSSSOSSPSSQSSSOSSPSSQSSSOSSPSSQSSSOSSPSSQSS" +
        "SOSSPSSQSSSOSSPSSQSSSOSSPSSQSSSOSSPSSQSSSOSSPSSQSSSOSSPSSQSS"; // 110 characters

    test("String contains more than 1 and less than 100 characters", () => {
        expect(countAlteredCharacters(string7)).toContain("not more than 99 characters");
    });

    test("String contain uppercase characters only", () => {
        expect(countAlteredCharacters(string6)).toContain("must be uppercase characters");
    });

    test("Characters are multiples of 3", () => {
        expect(countAlteredCharacters(string5)).toContain("must be in multiples of 3");
    });

    test("Return 0 if string is unaltered", () => {
        expect(countAlteredCharacters(string1)).toBe(0);
        expect(countAlteredCharacters(string2)).toBe(0);
    });

    test("Return numbers of altered characters", () => {
        expect(countAlteredCharacters(string3)).toBe(1);
        expect(countAlteredCharacters(string4)).toBe(3);
    });

});