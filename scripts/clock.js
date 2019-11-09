
    function digitalClock(){
        var today =new Date();
        var hour =today.getHours();
        var minutes =today.getMinutes();
        var seconds =today.getSeconds();
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        document.getElementById('clock').innerHTML =
            hour + ":" + minutes + ":" + seconds;
        var t =setTimeout(digitalClock, 500);
        
    }
        function checkTime(i){
            if(i<10) {i = "0" + i};
            return i;
        }
    