export const convertToBinary = (value) => {
    let result = "";
    let j = value;

    while( Math.floor(j/2) > 0) {
        result = "" + (j % 2) + result;
        j = Math.floor(j/2);
    }

    result = "" + (j % 2) + result;

    return result;
};

export const convertToBaseten = (value) => {
    let arrOfNums = value.split("").map( x => parseInt(x));
    let total = 0;

    let bitIndex = 1;

    for(let i = (arrOfNums.length - 1); i >= 0; i--){
        total += (arrOfNums[i] * bitIndex);
        bitIndex = bitIndex * 2;
    }
    
    return total;
}