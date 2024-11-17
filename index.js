const answer = ["Fizz", "Buzz", "FizzBuzz"];

let num = Number(prompt("Enter a number: "));

if (num % 3 === 0 && num % 5 === 0) {
    alert(answer[2]);
}
else if (num % 3 === 0) {
    alert(answer[0]);
}

else if (num % 5 === 0) {
    alert(answer[1]);
}
else {
    alert(num);
}

