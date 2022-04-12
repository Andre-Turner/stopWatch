var intervalVariable = undefined;
var timeleft = 0;
var totaltime = 0;
function startTimer() {
    intervalVariable = setInterval(updateTime, 10);
}