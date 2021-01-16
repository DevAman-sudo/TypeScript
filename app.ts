let myString: string = "Hello World";
let myNumber: number = 1;
let myBoolean: boolean = true;
let Any: any = `Anything @ ${123}`; // can be anithing string number or boolean //
console.log(myString , myNumber , myBoolean , Any);

let stringArr: string[] = ['hello' , 'world'];
let numberArr: number[] = [1 , 2 , 3];
let booleanArr: boolean[] = [true , false];
let anyArr: any[] = ['hello' , 1 , true];
console.log(stringArr , numberArr , booleanArr , anyArr);

let stringArr1: Array<string> = ['hello' , 'world'];
let numberArr1: Array<number> = [1 , 2 , 3];
let booleanArr1: Array<boolean> = [true , false];
let anyArr1: Array<any> = ['hello' , 1 , true];
console.log(stringArr1 , numberArr1 , booleanArr1 , anyArr1);

// Tuples //
let StringNumberTuple: [string , number] = ['hello' , 1];
console.log(StringNumberTuple);

// Void || null / undefined //
let myVoid: void = null; // can be both null and undefined //
let nullVoid: null = null;
let undefinedVoid: undefined = undefined;
console.log(myVoid , nullVoid , undefinedVoid);