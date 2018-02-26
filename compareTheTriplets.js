function compareTriplets(a, b) {
    a = a.split(" ");
    b = b.split(" ");

    /* Verify all inputs have three items each */
    if (a.length !== 3 || b.length !== 3){
        return "Both parameters must have 3 items each";
    }

    /* Verify that all items are integers */
    if(isNaN(a.join("") + b.join(""))){
        return "Both parameters must contain numbers only";
    }

    let output = [0, 0];

    a.map((value, index)=>{
        if(value === b[index]) return;

        parseInt(value) > parseInt(b[index]) ? output[0] +=1 : output[1] +=1;

    });

    return output.join(" ");

}

module.exports = compareTriplets;