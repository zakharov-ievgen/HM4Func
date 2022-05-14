function PrimeOrNot() {
    for (let i = 0; i < 10; i++) {
        let value = prompt("Enter your number!");
        if (value <= 100) {
            continue;
        } else {
            return console.log(value);
        }
    }
}

function AgeSelector() {
    let answer;
    let age = prompt("How old are you?");
    if (18 <= age && age <= 100) {
        answer = "Ura";
    } else {
        answer = !answer;
    }
    console.log(answer);
}
