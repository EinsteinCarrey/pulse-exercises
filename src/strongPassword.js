const countRemainingChars = (string)=>{

    const numberOfChars = parseInt(string.substr(0, string.indexOf("\r\n")));
    const passWd = string.split("\r\n")[1];

    /* Validate password length */
    if(passWd.length !== numberOfChars)
        return "length is not equal to number provided";

    if(passWd.length > 100)
        return "password should be not longer than 100 characters";

    let remainingChars = 0;

    /* If string is contains alphanumerics only, increment remaining characters */
    if(passWd.match(/^[A-Za-z0-9]+$/))
        remainingChars += 1;

    /* If string is does not contain small letter, increment remaining characters */
    if(!passWd.match(/[a-z]/))
        remainingChars += 1;

    /* If string is does not contain capital letter, increment remaining characters */
    if(!passWd.match(/[A-Z]/))
        remainingChars += 1;

    /* If string is not at-least 6 chars long, increment remaining characters */
    if(passWd.length < 6)
        remainingChars += (6 - passWd.length);


    return remainingChars;
};




module.exports = countRemainingChars;