function getSum(number1, number2) {
    return number1 + number2;
}
console.log(getSum(1, 4));
var getSum1 = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(getSum1('3', 8));
// optianal argument //
function myName(firstname, lastname) {
    if (firstname == undefined) {
        return lastname;
    }
    else if (lastname == undefined) {
        return firstname;
    }
    else {
        return firstname + " " + lastname;
    }
}
console.log(myName('aman'));
