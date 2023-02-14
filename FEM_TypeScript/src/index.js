var age = 6;
// between 500 and 1000
var RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;
var startTime = new Date();
var endTime;
setTimeout(function () {
    endTime = new Date();
}, RANDOM_WAIT_TIME);
function add(a, b) {
    return a + b; // strings? numbers? a mix?
}
var result = add(3, 4);
