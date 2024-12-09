//WHERE ALL ACTIONS HAPPEN
$w.onReady(function () {
    setInterval(updateTimer, 1000);
 
    $w("#datePicker").onChange(function () {
        dateSelected();
        console.log(dateSelected())
    });
 
    $w("#timePicker").onChange(function () {
        timeSelected();
        console.log(timeSelected())
    });
});
 
//DATE FUNCTION 
function dateSelected() {
    let dateVal = $w("#datePicker").value.toLocaleDateString();
    return dateVal;
}
 
//TIME FUNCTION 
function timeSelected() {
    let timeVal = $w("#timePicker").value;
    return timeVal;
}
 
//MAIN TIMER FUNCTION 
function updateTimer() {
 
    let countDownDay = Date.parse(`${dateSelected()} ${timeSelected()}`);
    let now = Number(new Date());
    let date = countDownDay - now;
 
    let days = Math.floor(date / (1000 * 60 * 60 * 24));
    let hours = Math.floor(date / (1000 * 60 * 60));
    let mins = Math.floor(date / (1000 * 60));
    let secs = Math.floor(date / 1000);
 
    let dayDisplay = checkTimerZeros((days).toLocaleString());
    let hourDisplay = checkTimerZeros((hours - days * 24).toLocaleString());
    let minuteDisplay = checkTimerZeros((mins - hours * 60).toLocaleString());
    let secondsDisplay = checkTimerZeros((secs - mins * 60).toLocaleString());
 
    //ADD FOR VALID TIME
    if (date > 0) {
        $w("#day").text = dayDisplay;
        $w("#hour").text = hourDisplay;
        $w("#minute").text = minuteDisplay;
        $w("#second").text = secondsDisplay;
 
        $w("#discountText").hide();
        //$w("#box5, #box6, #box7, #box8").style.backgroundColor = "rgba(10, 10, 10, 0.80)";
        // $w("#countDownTimer").show()
 
        //SET COUNTDOWN TO DEFAULT IF THE TIME IS REACHED// ADD FOR INVALID TIME
    } else if (date < 0) {
        $w("#day").text = "00";
        $w("#hour").text = "00";
        $w("#minute").text = "00";
        $w("#second").text = "00";
 
        $w("#discountText").hide();
        //$w("#box5, #box6, #box7, #box8").style.backgroundColor = "rgba(245, 49, 49)";
        // $w("#countDownTimer").hide()
    }
 
}
 
//ADD A ZERO IN FRONT IF VALUE IS LESS THAN 10
function checkTimerZeros(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
//END ▶
