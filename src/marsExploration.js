const countAlteredCharacters = (input) => {

    /* Verify string is more than 1 and less than 99 characters long */
    if (!input || input.length > 99)
        return "Input must have atleast one character and not more than 99 characters";

    /* Verify characters are in multiples of 3 */
    if (input.length % 3 !== 0)
        return "String length must be in multiples of 3";

    /* Verify string contains uppercase letters only */
    if (input.toUpperCase() != input)
        return "All characters in input must be uppercase characters";


    /* Count number of distorted letters */
    let distortedLetters = 0;
    const correctFormat = ['S', 'O', 'S'];
    input.split('').map((value, index)=>{
        if(value !== correctFormat[index % 3]){
            distortedLetters += 1;
        }
    });

    return distortedLetters;

};

module.exports = countAlteredCharacters;