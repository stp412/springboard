
function countDown(n) {
    let counter = 1;
    let callback = function () {
        if(n-counter > 0) {
            console.log(n - counter);
            counter++;
        } else {
            console.log("DONE!");
            clearInterval(intervalId);
        }
    }
    let intervalId = setInterval(callback, 1000);
}

function randomGame () {
    let number = 0;
    let counter = 1;
    let callback = function () {
        number = Math.random();
        console.log("Number: " + number);
        if (number > 0.75) {
            console.log("Counter: " + counter);
            clearInterval(intervalId);
        } else {
            counter++;
        }
    }
    let intervalId = setInterval(callback, 1000);
}

//coundDown(11);
//randomGame();
