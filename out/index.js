"use strict";
//  const processData = (input: string | number[]): any => {
//   if (typeof input === 'string') {
//     return input.toLocaleLowerCase();
//   }else {
//     typeof input === 'isarray(input)';
//   }
//   processData ("HLLO");
const processData = (input) => {
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
};
