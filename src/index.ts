//  const processData = (input: string | number[]): any => {
//   if (typeof input === 'string') {
//     return input.toLocaleLowerCase();
//   }else {
//     typeof input === 'isarray(input)';
//   }
//   processData ("HLLO");

interface processDataType {
    (input: string | number[]): any;
}

const processData: processDataType = (input) => {
    if (typeof input === 'string') {
        return input.toLocaleLowerCase();
    } 
 else {
        let sum = 0;
        for (const element of input) {
            sum += element;
        }
        return sum;
    }
    
}

console.log(processData("HELLO"));
console.log(processData([1, 2, 3, 4]));
