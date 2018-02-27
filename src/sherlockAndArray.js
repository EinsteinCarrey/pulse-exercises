const sherlockAndArray = (input) =>{

    const rows = input.split("\r\n");
    const testCases = parseInt(rows[0]);

    if(testCases < 1 || testCases > 10)
        return "Test-cases must be at-least 1 and must not exceed 10";

    let output = "";
    let testCasesExceedLimit = false;
    rows.map((value, index) =>{

        if(index%2 === 1){
            /* Check if array length Number exceeds 10e5 */
            if(parseInt(value) > 10e5)
                testCasesExceedLimit = true;

        }else{

            if(index === 0)
                return;

                const values = value.split(' ').map(Number);
                let containsSherlockNumbers = false;
                values.map((item, idx)=>{

                    if(idx === 0 || containsSherlockNumbers)
                        return;

                        let valuesBefore = values.slice(0, idx);
                        let valuesAfter = values.slice(idx+1);

                        let sumBefore = valuesBefore.reduce((a, b) => a + b, 0);
                        let sumAfter = valuesAfter.reduce((a, b) => a + b, 0);

                        if(sumBefore === sumAfter)
                            containsSherlockNumbers = true;
                });

                containsSherlockNumbers ? output += 'YES\r\n' : output += 'NO\r\n';
        }

    });

    if(testCasesExceedLimit)
        return "Length of array must not exceed 10e5";


    return output === '' ? "NO\r\n" : `${output}`;

};

module.exports = sherlockAndArray;