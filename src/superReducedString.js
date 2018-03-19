/**
 * Removes duplicate characters that appear in multiples of two
 * eg: input "aabcc" will output "b"
 */
const recursivelyRemoveDuplicates = (characterArray) =>{
    characterArray.map((value, index) => {
        if(index < characterArray.length) {
            if (value === characterArray[index + 1]){
                characterArray.splice(index, 2);
                recursivelyRemoveDuplicates(characterArray);
            }
        }
    });

    return characterArray;
};

const reduceString = (string)=>{
    let reducedString = "Empty String";

    if(string){

        /* Validate string is less than 100 characters */
        if(string.length > 100)
            return "String must not be longer than 100 characters";

        /* Split string to array and sort by alphabetic order */
        const allCharacters = Array.from(string).sort();

        /* Iterate array removing all duplicate values */
        const reducedArray = recursivelyRemoveDuplicates(allCharacters);

        reducedString =  reducedArray.length > 0 ? reducedArray.join(""): "Empty String";
    }

    return reducedString;
};


module.exports = reduceString;