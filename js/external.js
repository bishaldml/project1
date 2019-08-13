function add() {
    var a = 20;
    b = 10;
    let c = a + b;
    document.write(" The sum of " + a + " and " + b + " = " + c);
}
function addByUser() {
    var num1, num2;
    num1 = parseInt(prompt("enter the num1"));
    num2 = parseInt(prompt("enter the num2"));
    sum = num1 + num2;
    document.write(" The sum of " + num1 + " and " + num2 + "=" + sum);

}
function oddEven() {
    var num1;
    num1 = parseInt(prompt("enter the number to check odd or even"));
    if (num1 % 2 == 0) {
        alert(num1 + "is even");
    }
    else {
        alert(num1 + "is odd")
    }
}
function factorial() {
    var num, fact;
    num = parseInt(prompt("enter the number to find factorial"));
    var fact = 1;
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    alert(" the factorial of " + num + " is " + fact);
}
function christmas() {
    var month = "december";
    var day = "25";
    if (month == "december" && day == "25") {
        alert("Today is merry christmas.")
    }
    else if (month == "december" && (day >= "20" || day <= "30")) {
        alert("wish u marry christmas.")
    }
    else {
        alert("normal day.")
    }
}
function multiplication() {
    var num, multiplication, i;
    num = parseInt(prompt("enter the number to find its multiplication:"));
    for (i = 1; i <= 10; i++) {
        multiplication = num * i;
        document.getElementById("multiplication").innerHTML += num + "x" + i + "=" + multiplication + "<br/>";
    }
}