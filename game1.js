console.log(game1(["Fizz","Buzz and FizzBuzz"]))

function game1(number){
    var sell =""
    var boole = [false,false]
    if (number % 3 == 0 || number % 10 == 3 || parseInt(number / 10) == 3) {
        sell += 'Fizz'
        boole[0] = true
    } 
    if (number % 5 == 0 || number % 10 == 5 || parseInt(number / 10 ) == 5) {
        sell += 'Buzz'
        boole[1] = true
    } 
    if(boole.indexOf(true) == -1){
        sell = ""+number
    }
    return sell

}
module.exports = game1