let countUpDate = new Date("Sep 4, 2015 16:00:00");
let startedYear = countUpDate.getFullYear();

    // Update every 1s
    setInterval(function() {

    let now = new Date().getTime();

    let date = new Date()

    let year = date.getFullYear();

    let yearsPassed = year - startedYear;

    let damn = "1";
    let accYear = yearsPassed - damn;

    let startedMonth = "9";
    let month = date.getMonth();

    let monthsPassed = month + startedMonth;

    let wtf = "8"
    let accMonth = monthsPassed - wtf;

    let distance = now - countUpDate.getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("result").innerHTML = "MineVN đã vận hành được " + accYear + " năm " + accMonth + " tháng " + days + " ngày " + hours + " giờ " + minutes + " phút và " + seconds + " giây";
    
    }, 1000)