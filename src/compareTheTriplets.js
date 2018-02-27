const compareTriplets = (a, b) => {
    a = a.split(" ");
    b = b.split(" ");

    /* Verify all inputs have three items each */
    if (a.length !== 3 || b.length !== 3)
        return "Both parameters must have 3 items each";

    /* Verify that all items are integers */
    if(isNaN(a.join("") + b.join("")))
        return "Both parameters must contain numbers only";

    /* Verify that all items are integers less than 101 */
    const aIndex = a.findIndex(x => x > 100);
    const bIndex = b.findIndex(x => x > 100);
    if(aIndex > -1 || bIndex > -1)
        return "All numbers in the parameter must less than or equal to 100";

    /* Verify that all items are positive integers*/
    const indexA = a.findIndex(x => x < 0);
    const indexB = b.findIndex(x => x < 0);
    if(indexA > -1 || indexB > -1)
        return "All numbers in the parameter must be positive integers";

    /* Calculate points earned */
    let output = [0, 0];
    a.map((value, index)=>{
        if(value === b[index])
            return;

        parseInt(value) > parseInt(b[index]) ? output[0] +=1 : output[1] +=1;

    });

    return output.join(" ");

};

module.exports = compareTriplets;