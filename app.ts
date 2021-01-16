let myString: string = "Hello World";
let myNumber: number = 1;
let myBoolean: boolean = true;
let Any: any = `Anything @ ${123}`; // can be anithing string number or boolean //

let stringArr: string[] = ['hello' , 'world'];
let numberArr: number[] = [1 , 2 , 3];
let booleanArr: boolean[] = [true , false];
let anyArr: any[] = ['hello' , 1 , true];

let stringArr1: Array<string> = ['hello' , 'world'];
let numberArr1: Array<number> = [1 , 2 , 3];
let booleanArr1: Array<boolean> = [true , false];
let anyArr1: Array<any> = ['hello' , 1 , true];

console.log(myString , myNumber , myBoolean , Any);
console.log(stringArr , numberArr , booleanArr , anyArr);
console.log(stringArr1 , numberArr1 , booleanArr1 , anyArr1);