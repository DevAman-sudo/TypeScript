class User {
    public name: string;
    protected email: string;
    private age: number;
    
    constructor(name: string , email: string , age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        
        console.log(`User Created With ${name} , ${email} , ${age}`);
    }
    
    register() {
        console.log(`${this.name} is been registered`);
        console.log(`his age is ${this.age}`);
        console.log(`${this.email} is his email address`);
    }
}

class Member extends User {
    this.id: number;
    
    constructor(id: number, name: string, email: string, age: number) {
        super(name , email , age);
        this.id = id;
    }
}

let me = new User('aman' , 'abc@gmail.com' , 19);

console.log(me.register());