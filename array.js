function findMinMax(array){
    const max =Math.max(...array);
    const min =Math.min(...array);
    return{max,min};
}
const numbers =[1,4,7,5,9];
const result =findMinMax(numbers);
console.log(result.max);
console.log(result.min);


