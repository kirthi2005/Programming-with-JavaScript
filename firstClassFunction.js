function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    console.log('number'+ Math.floor((Math.random() * 10) + 1));
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = false;

var getNumber;

if(useRandom) {
    getNumber = randomNum
    console.log(getNumber);
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())