export const convertToBinary = () => {


    
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