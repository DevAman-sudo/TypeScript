var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created With " + name + " , " + email + " , " + age);
    }
    User.prototype.register = function () {
        console.log(this.name + " is been registered");
        console.log("his age is " + this.age);
        console.log(this.email + " is his email address");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Member;
}(User));
this.id;
number;
constructor(id, number, name, string, email, string, age, number);
{
    _this = _super.call(this, name, email, age) || this;
    this.id = id;
}
var me = new User('aman', 'abc@gmail.com', 19);
console.log(me.register());
