interface fileDataType {
    (input: string | number[]): any;
}

const fileData: fileDataType = (input) => {
    if (input === 'string'){
        return input.toLocaleLowerCase()
    } else {
        let sum =0;
        for (const element of input){
           

        }

    }
}