function minMaxSum(values) {
    values = values.split(" ").map(Number);

    /* validate input has five items */
    if(values.length > 5) return "Input contains more than five values";

    /* Validate input is more than 0 less than 10e9 */
    const i = values.findIndex(x => x < 1 || x >= 10e9);
    if(i !== -1) {
        return "items must be less than 10e9 and more than 0";
    }

    /* Sort items from smallest to largest */
    const sortedValues = values.sort((a, b) => {
        return a - b;
    });

    /* Calculate minimum sum */
    const leastFour = sortedValues.slice();
    leastFour.splice(4, 1);
    let minSum = 0;
    leastFour.map((value)=>{
        minSum += parseInt(value);
    });

    /* Calculate max sum */
    const highestFour = sortedValues.slice();
    highestFour.splice(0, 1);
    let maxSum = 0;
    highestFour.map((value)=>{
        maxSum += parseInt(value);
    });

    return `${minSum} ${maxSum}`;

}

module.exports = minMaxSum;