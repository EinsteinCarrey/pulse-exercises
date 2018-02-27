const diagonalDifference = (matrix) => {
    matrix = matrix.split("\r\n");
    const N = parseInt(matrix[0]);

    // remove value N from the matrix
    matrix.splice(0,1);

    // Check that matrix has N items in each row
    const indexOfUnsymmetricalMatrix = matrix.findIndex(x => x.split(' ').length > N);
    if(indexOfUnsymmetricalMatrix > -1 )
        return "Number of items in matrix is not equal to value N";


    // Check items in matrix are more than -101 and less than 101 and add diagonals
    let countPrim = 0, countSecondary = N, sumPrimary = 0, sumSecondary = 0;
    let iLessThanNeg100, iLargerThanPos100, valuesAreWithinParams = true;
    matrix.map((value)=>{

        const itemsInRow = value.split(' ');
        iLessThanNeg100 = itemsInRow.findIndex(x => parseInt(x) > 100);
        iLargerThanPos100 = itemsInRow.findIndex(x => parseInt(x) < -100);

        if(iLargerThanPos100 > -1 || iLessThanNeg100 > -1) {
            valuesAreWithinParams = false;
            return;
        }

        --countSecondary;
        sumSecondary += parseInt(itemsInRow[countSecondary]);

        sumPrimary += parseInt(itemsInRow[countPrim]);
        countPrim++;

    });

    if(!valuesAreWithinParams)
        return "Items in matrix must be bigger than -101 and less than 101";

    return sumPrimary > sumSecondary ? sumPrimary - sumSecondary : sumSecondary - sumPrimary;

};

module.exports = diagonalDifference;