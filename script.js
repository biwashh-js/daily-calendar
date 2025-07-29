
function calendar() {
    let date = new Date();

    let year = document.getElementById("year");
    let month = document.getElementById("month");
    let day = document.getElementById("day");
    let weekDay = document.getElementById("weekDay");

    let yearDate = date.getFullYear();
    let monthDate = date.getMonth();
    let dayDate = date.getDate();
    let weekDate = date.getDay();

    let months;
    let bar;
    if (monthDate == 0) {
        months = "Jan.";
    }
    if (monthDate == 1) {
        months = "Feb.";
    }
    if (monthDate == 2) {
        months = "Mar.";
    }
    if (monthDate == 3) {
        months = "Apr.";
    }
    if (monthDate == 4) {
        months = "May.";
    }
    if (monthDate == 5) {
        months = "June";
    }
    if (monthDate == 6) {
        months = "Jul.";
    }
    if (monthDate == 7) {
        months = "Aug.";
    }
    if (monthDate == 8) {
        month = "Sep.";
    }
    if (monthDate == 9) {
        months = "Oct.";
    }
    if (monthDate == 10) {
        months = "Nov.";
    }
    if (monthDate == 11) {
        months = "Dec.";
    }



    if(weekDate==0){
        bar = "Sunday";
    }
    if(weekDate==1){
        bar = "Monday";
    }
    if(weekDate==2){
        bar = "Tuesday";
    }
    if(weekDate==3){
        bar = "Wedneday";
    }
    if(weekDate==4){
        bar = "Thursday";
    }
    if(weekDate==5){
        bar = "Friday";
    }
    
    if(weekDate==6){
        bar = "Saturday";
    }
    
    year.innerHTML = yearDate;
    month.innerHTML = months;
    day.innerHTML = dayDate;
    weekDay.innerHTML = bar;

   
    function time(){
        let hr = document.getElementById("hr");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
    
        let date = new Date();
        let hrTime = date.getHours();
        let minTime = date.getMinutes();
        let secTime = date.getSeconds();
    
    
        hr.innerHTML= hrTime;
        min.innerHTML=minTime;
        sec.innerHTML=secTime;
        
    }
    time();
  
   setInterval(time,1000);


}
calendar();

setInterval(calendar, 1000);
