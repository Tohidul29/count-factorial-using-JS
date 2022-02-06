// lets make a function for counting the factorial:
function factorialCount(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let myInput = factorialCount(6);
console.log(myInput);